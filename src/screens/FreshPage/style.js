import { PURPLE } from "constants/colors";
import { WIDTH, HEIGHT } from "constants/space";
import styled from "styled-components/native";
import { typography } from "theme/typography";

export const CarouselItem = styled.View`
    justify-content: flex-start;
    align-items: center;
    width: ${WIDTH}px;
    height: ${HEIGHT * .8}px;
`;

export const CarouselBottom = styled.View`
    height: 25%;
    align-self: center;
`;

export const CarouselTitle = styled.Text`
    ${{ ...typography.title }}
    color: ${PURPLE};
    margin-bottom: 10px;
    text-align: center;
`;

export const CarouselSubTitle = styled.Text`
    ${{ ...typography.sm_text }}
`;

export const Pagination = styled.View`
    flex-direction: row;
    height: 64px; 
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const CarouselDot = styled.View`
    height: 10px;
    border-radius: 5px;
    background-color: ${PURPLE};
    margin-horizontal: 8px;
`;

export const NavigationBtn = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    border-radius: 20px;
    background-color: ${PURPLE};
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 5%;
    right: 10%;
`;