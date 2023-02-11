import styled from "styled-components/native";
import { typography } from "@/theme/typography";
import { SPACE, SIDE_CARD_SPACE } from "@/constants/space";

export const Carousel = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;

export const CarouselItem = styled.TouchableOpacity`
              height: 100px;
              width: 70px;
              border-radius: 18px;
              align-items: center;
              justify-content: center;
              margin-left: ${props => props.mrglft ? SIDE_CARD_SPACE : SPACE};
              margin-right: ${props => props.mrgrght ? SIDE_CARD_SPACE : SPACE};
            `;

export const SliderMedText = styled.Text`
  ${{ ...typography.text }}
`;

export const SliderSmText = styled.Text`
  ${{ ...typography.sm_text }}
`;

export const TodoContainer = styled.ScrollView`
  height: 100%;
  margin-vertical: 10px;
  padding: 10px;
`;

export const Todo = styled.View`
  width: 100%;
  padding: 8px;
  flex-direction: row-reverse;
`;

export const TodoMessage = styled.View`
  width: 80%;
  padding: 15px;
  padding-bottom: 5px;
  border-radius: 5px;
  background-color: #cbf2cd;
`;

export const TodoText = styled(SliderMedText)`
  color: #222;
`;

export const BottomLine = styled.View`
  width: 100%;
  background-color: rgba(0,0,0,.2);
  height: 1px;
  margin-top: 2px;
  margin-bottom: 8px;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MessageStatus = styled(SliderSmText)`
  font-size: 10px;
  font-weight: 700,
  margin-vertical: 4px;
`;

export const TodoTime = styled(SliderSmText)`
  width: 20%;
  text-align: left;
`;
