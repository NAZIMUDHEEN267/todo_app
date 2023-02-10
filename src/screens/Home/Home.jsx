import { useEffect, useState, useRef } from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  Image, Text
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from "@react-navigation/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { slideArray, currentDate } from '../../helper/Date';
import Button from '../../components/Button';
import Container from '../../components/Container';
import NotFound from "../../assets/images/oops.png";
import { CHECK_USER } from '../../slices/userSlice';
import { WIDTH } from '../../constants/space';
import { DARK_BLUE, PRIMARY_COLOR } from '../../constants/colors';
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
import { getItem } from '../../slices/storageSlice';


const Home = () => {
  const [scrollX, setScrollX] = useState(0);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const itemFound = useSelector(state => state.db.itemFound);
  const items = useSelector(state => state.db.todos);
  const navScrollRef = useRef();

  useEffect(() => {
    dispatch(CHECK_USER(false));
    // dispatch(getItem(currentDate))
    navScrollRef.current.scrollToIndex({ index: 10, viewOffset: WIDTH * 1.2 })
  }, [])

  const { colors } = useTheme();

  return (
    <Container>
      {/* slider */}
      <Carousel>
        <FlatList
          getItemLayout={(data, index) => (
            { length: 110, offset: index * 110, index }
          )}
          ref={navScrollRef}
          horizontal
          data={slideArray}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => setScrollX(e.nativeEvent.contentOffset.x)}
          renderItem={function ({ item, index }) {

            const currentDate = index === 10;

            return (
              <CarouselItem
                style={currentDate ? { backgroundColor: PRIMARY_COLOR } : { backgroundColor: colors.box, transform: [{ scale: .9 }] }}
                mrglft={index === 0 ? true : false}
                mrgrght={index === slideArray.length - 1 ? true : false}
                item={scrollX}
              >
                <SliderMedText style={currentDate ? { color: colors.buttonTxt } : { color: colors.text }}>{item.dayNUm}</SliderMedText>
                <SliderSmText style={currentDate ? { color: colors.buttonTxt } : { color: colors.sm_text }}>{item.day}</SliderSmText>
              </CarouselItem>
            )
          }}
        />
      </Carousel>
      {/* todo list*/}
      <TodoContainer
        showsVerticalScrollIndicator={false}>
        {
          itemFound ?
            items.map((item, i) => (
              <Todo key={String(i)}>
                <TodoMessage style={shadow("blue")}>
                  <TodoText>{item.message}</TodoText>
                  <BottomLine />
                  <StatusContainer>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <FontAwesome name="clock-o" size={15} color={"green"} style={{ marginRight: 8 }} />
                      <MessageStatus>
                        {item.start_time} pm - {item.end_time} pm
                      </MessageStatus>
                    </View>
                    <TouchableOpacity activeOpacity={.5}>
                      <FontAwesome name={"edit"} size={18} />
                    </TouchableOpacity>
                  </StatusContainer>
                </TodoMessage>
                <TodoTime style={{ color: colors.sm_text }}>{item.start_time} AM</TodoTime>
              </Todo>
            ))
            :
            <Image
              source={NotFound}
              style={{ width: 200, height: 200, margin: "25%" }}
              resizeMode={"contain"}
            />
        }
      </TodoContainer>
      {/* add button */}
      <Button />
    </Container>
  )
}

export default Home