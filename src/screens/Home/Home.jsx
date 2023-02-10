import { useEffect, useState } from 'react';
import { FlatList, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from "@react-navigation/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { slideArray, dateNum, day } from '../../helper/Date';
import Button from '../../components/Button';
import Container from '../../components/Container';
import bg from "../../assets/images/pattern_3.jpg";
import { CHECK_USER } from '../../slices/userSlice';
import {
  BottomLine,
  Carousel,
  CarouselItem,
  MessageStatus,
  SliderMedText,
  SliderSmText,
  StatusContainer,
  Todo,
  TodoContainer,
  TodoMessage,
  TodoText,
  TodoTime
} from './style';
import shadow from '../../theme/shadow';


const Home = () => {
  const [scrollX, setScrollX] = useState(0);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(CHECK_USER(false))
  }, [])

  const { colors } = useTheme();

  return (
    <Container>
      {/* slider */}
      <Carousel>
        <FlatList
          horizontal
          data={slideArray}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => setScrollX(e.nativeEvent.contentOffset.x)}
          renderItem={function ({ item, index }) {
            return (
              <CarouselItem
                style={{ backgroundColor: colors.box }}
                mrglft={index === 0 ? true : false}
                mrgrght={index === slideArray.length - 1 ? true : false}
                item={scrollX}
              >
                <SliderMedText style={{ color: colors.text }}>{item.dayNUm}</SliderMedText>
                <SliderSmText style={{ color: colors.sm_text }}>{item.day}</SliderSmText>
              </CarouselItem>
            )
          }}
        />
      </Carousel>
      {/* todo list*/}
      <TodoContainer showsVerticalScrollIndicator={false}>
        {/* {
          map(() => 
            return (
            <Todo>
              <TodoMessage style={shadow("blue")}>
                <TodoText>Morning bath</TodoText>
                <BottomLine />
                <StatusContainer>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome name="clock-o" size={15} color={"green"} style={{ marginRight: 8 }} />
                    <MessageStatus>
                      8 pm - 9 pm
                    </MessageStatus>
                  </View>
                  <TouchableOpacity activeOpacity={.5}>
                    <FontAwesome name={"edit"} size={18} />
                  </TouchableOpacity>
                </StatusContainer>
              </TodoMessage>
              <TodoTime style={{ color: colors.sm_text }}>8 AM</TodoTime>
            </Todo>
          ))
        } */}
      </TodoContainer>
      {/* add button */}
      <Button />
    </Container>
  )
}

export default Home