import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch } from 'react-redux'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CHECK_USER } from 'slices/userSlice'
import {
    CarouselBottom,
    CarouselItem,
    CarouselSubTitle,
    CarouselTitle,
    NavigationBtn
} from './style';
import { CAROUSEL_DATA } from 'constants/data';
import { HEIGHT, WIDTH } from 'constants/space';
import Paginator from './Paginator';

const FreshPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const dispatch = useDispatch();

    return (
        <View>
            <FlatList
                onScroll={(e) => {
                    const scrollWidth = e.nativeEvent.contentOffset.x;
                    const screenWidth = WIDTH;
                    setCurrentIndex(Math.round(scrollWidth / screenWidth));
                }}
                showsHorizontalScrollIndicator={false}
                horizontal
                pagingEnabled
                data={CAROUSEL_DATA}
                bounces={false}
                keyExtractor={(_, index) => index}
                renderItem={({ item, index }) => {
                    return (<CarouselItem >
                        <item.svg height={HEIGHT * .6} width={WIDTH * .9} />
                        <CarouselBottom>
                            <CarouselTitle>{item.title}</CarouselTitle>
                            <CarouselSubTitle>{item.subtitle}</CarouselSubTitle>
                        </CarouselBottom>
                    </CarouselItem>)
                }}
            />

            {/* paginator */}
            <Paginator data={CAROUSEL_DATA} index={currentIndex} />

            {/* navigation button */}
            <NavigationBtn
                activeOpacity={.7}
                style={{ display: currentIndex === 2 ? "flex" : "none" }}
                onPress={() => dispatch(CHECK_USER(true))}
            >
                <FontAwesome name={"arrow-right"} size={25} color={"#fff"} />
            </NavigationBtn>
        </View>
    )
}

export default FreshPage