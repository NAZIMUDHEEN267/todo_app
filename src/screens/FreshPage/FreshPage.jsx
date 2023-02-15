import { FlatList, Text } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CHECK_USER } from 'slices/userSlice'
import { CAROUSEL_DATA } from 'constants/data';
import Container from 'components/Container';
import { CarouselItem, CarouselSubTitle, CarouselTitle } from './style';
import { HEIGHT, WIDTH } from 'constants/space';

const FreshPage = () => {
    const dispatch = useDispatch();
    return (
            <FlatList
                horizontal
                pagingEnabled
                data={CAROUSEL_DATA}
                renderItem={({ item, index }) => {
                    return (<CarouselItem >
                        <item.svg width={WIDTH * .9} height={HEIGHT * .7} />
                        <CarouselTitle>{item.title}</CarouselTitle>
                        <CarouselSubTitle>{item.subtitle}</CarouselSubTitle>
                    </CarouselItem>)
                }}
            />
    )
}

export default FreshPage