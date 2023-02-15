import { WIDTH, HEIGHT } from "constants/space";
import styled from "styled-components/native";
import { typography } from "theme/typography";

export const CarouselItem = styled.View`
    justify-content: flex-start;
    align-items: center;
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
`;

export const CarouselTitle = styled.Text`
    ${{ ...typography.title }}
    color: #000;
`;

export const CarouselSubTitle = styled.Text`
    ${{ ...typography.sm_text }}
`;