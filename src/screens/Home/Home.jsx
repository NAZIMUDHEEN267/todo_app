import { FlatList, ScrollView, Slider, View } from 'react-native'
import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Animated, {interpolate, Extrapolate, useSharedValue} from "react-native-reanimated"
import { slideArray, dateNum, day } from '../../helper/Date';
import Button from '../../components/Button';
import Container from '../../components/Container';
import {
  BottomLine,
  Carousel,
  CarouselItem,
  MessageStatus,
  SliderMedText,
  SliderSmText,
  Todo,
  TodoContainer,
  TodoMessage,
  TodoText,
  TodoTime
} from './style';
import shadow from '../../theme/shadow';

const Home = () => {
  const [scrollX, setScrollX] = useState(0);

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
      <TodoContainer>
        <Todo>
          <TodoMessage style={shadow("blue")}>
            <TodoText>Morning bath</TodoText>
            <BottomLine />
            <View>
              <MessageStatus>
                <FontAwesome name="circle-thin" size={20} />
                8 pm - 9 pm
              </MessageStatus>
            </View>
          </TodoMessage>
          <TodoTime style={{ color: colors.sm_text }}>8 AM</TodoTime>
        </Todo>
      </TodoContainer>

      {/* add button */}
      <Button />
    </Container>
  )
}

export default Home