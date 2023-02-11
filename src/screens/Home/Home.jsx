import { useEffect, useRef } from 'react';
import { FlatList, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from "@react-navigation/native";
import { slideArray, currentDate } from '@/helper/Date';
import Button from '@/components/Button';
import TodoItem from '@/components/Todo';
import Container from '@/components/Container';
import NotFound from "@/assets/images/oops.png";
import { CHECK_USER } from '@/slices/userSlice';
import { PRIMARY_COLOR } from '@/constants/colors';
import { NAVIGATION } from '@/constants/navigation';
import {
  Carousel,
  CarouselItem,
  SliderMedText,
  SliderSmText,
  TodoContainer,
} from './style';
import { day } from '@/helper/Date';


const Home = ({navigation}) => {
  const { colors } = useTheme();
  const { todos, itemFound } = useSelector(state => state.db);
  const dispatch = useDispatch();
  const navScrollRef = useRef();

  useEffect(() => {
    dispatch(CHECK_USER(false));
    navScrollRef.current.scrollToIndex({ index: day, viewOffset: day * 53})
  }, []);

  // Event handler for button 
  function eventHandler() {
    navigation.navigate(NAVIGATION.NewTodo);
  }


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
          keyExtractor={(_, i) => String(i)}
          renderItem={function ({ item, index }) {

            const currentDate = index === day - 1;

            return (
              <CarouselItem
                style={currentDate ? { backgroundColor: PRIMARY_COLOR } : { backgroundColor: colors.box, transform: [{ scale: .9 }] }}
                mrglft={index === 0 ? true : false}
                mrgrght={index === slideArray.length - 1 ? true : false}
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
            todos.map((item, i) => (
              <TodoItem key={String(i)} data={item}/>
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
      <Button eventHandler={eventHandler} btnText={"+ Add a New Todo"}/>
    </Container>
  )
}

export default Home