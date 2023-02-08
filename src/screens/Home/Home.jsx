import { FlatList } from 'react-native'
import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from 'react';
// import Animated, {interpolate, Extrapolate, useSharedValue} from "react-native-reanimated"
import { slideArray, dateNum, day } from '../../helper/Date';
import Button from '../../components/Button';
import Container from '../../components/Container';
import {
  SliderItem,
  SliderMedText,
  SliderSmText
} from './style';

const Home = () => {
  const [scrollX, setScrollX] = useState(0);

  const { colors } = useTheme();

  return (
    <Container>
      {/* scroll dates */}
      <FlatList
        horizontal
        data={slideArray}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => setScrollX(e.nativeEvent.contentOffset.x)}
        renderItem={function ({ item, index }) {
          return (
            <SliderItem
              style={{ backgroundColor: colors.box }}
              mrglft={index === 0 ? true : false}
              mrgrght={index === slideArray.length - 1 ? true : false}
              item={scrollX}
            >
              <SliderMedText>{item.dayNUm}</SliderMedText>
              <SliderSmText>{item.day}</SliderSmText>
            </SliderItem>
          )
        }}
      />
      {/* todo list*/}


      {/* add button */}
      <Button />
    </Container>
  )
}

export default Home