import styled from "styled-components/native";
import { typography } from "../../theme/typography";
import { SPACE, SIDE_CARD_SPACE } from "../../constants/space";

const Slider = {

}

export const SliderItem = styled.TouchableOpacity`
              height: 100px;
              width: 70px;
              border-radius: 18px;
              align-items: center;
              justify-content: center;
              margin-left: ${props => props.mrglft ? SIDE_CARD_SPACE : SPACE };
              margin-right: ${props => props.mrgrght ? SIDE_CARD_SPACE : SPACE };
            `;         

export const SliderMedText = styled.Text`
  ${{...typography.title}}
`;

export const SliderSmText = styled.Text`
  ${{...typography.sm_text}}
`;


const TodoItem = {}

const TodoItemTime = {}
