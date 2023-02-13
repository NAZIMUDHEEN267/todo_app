import { useEffect, useRef, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from "@react-navigation/native";
import { slideArray, currentDate } from '@/helper/Date';
import Button from '@/components/Button';
import Todo from '@/components/Todo';
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
import { SET_ITEM_FOUND } from 'slices/storageSlice';


const Home = ({navigation}) => {
  const [searchItem, setSearchItem] = useState(currentDate);
  const [itemFound, setItemFound] = useState(false);
  const { colors } = useTheme();
  const { todos } = useSelector(state => state.db);
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
                onPress={() => setSearchItem(`${index}/02/2023`)}
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
          Object.keys(todos).map((item) => {
            if(item === "13/02/2023") {
              setItemFound(false);
              return todos[item].map((item) => <Todo item={item} key={Math.random() * Date.now()}/>)
            } else {
              setItemFound(false);
              return []
            }
          })
        }

        {   
            !itemFound ?  
            <Image
              source={NotFound}
              style={{ width: 200, height: 200, margin: "25%" }}
              resizeMode={"contain"}
            />
            : null
        }
      </TodoContainer>
      {/* add button */}
      <Button eventHandler={eventHandler} btnText={"+ Add a New Todo"}/>
    </Container>
  )
}

export default Home