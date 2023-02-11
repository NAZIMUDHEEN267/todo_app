import { LIGHT_ORANGE } from "constants/colors";
import styled from "styled-components/native";
import { typography } from "theme/typography";


export const Message = styled.View`
    width: 100%;
    height: 90px;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
`;

export const MessageInput = styled.TextInput`
    width: 60%;
    height: 100%;
    ${{...typography.text}}
`;

export const MessagePicker = styled.View`
    height: 100%;
    width: 20%;
    align-items: center;
    justify-content: center;
`;

export const PickerBtn = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const CalenderPicker = styled(MessagePicker)``;

export const CalenderBtn = styled(PickerBtn)`
    background-color: ${LIGHT_ORANGE};
`;