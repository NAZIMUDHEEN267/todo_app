import { LIGHT_ORANGE, LIGHT_RED, SHADOW_COLOR } from "constants/colors";
import styled from "styled-components/native";
import { typography } from "theme/typography";


export const Message = styled.View`
    width: 100%;
    height: 90px;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-color: rgba(0,0,0,.1);
`;

export const MessageInput = styled.TextInput`
    width: 60%;
    height: 100%;
    ${{...typography.md_text}}
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
    background-color: ${LIGHT_RED};
`;

export const TimePicker = styled(MessagePicker)`
    width: 40%;
    flex-direction: row;
    padding: 10px;
    justify-content: center;
    border-bottom-width: 1px;
    border-color: rgba(0,0,0,.1);
`;

export const TimeBtn = styled(PickerBtn)`
    background-color: ${LIGHT_ORANGE};
`;

export const Divide = styled.Text`
    width: 20%;
    text-align: center;
    ${{...typography.text}}
`;

export const TimeText = styled(Divide)`
    width: 70%;
    margin-left: 5px;
    ${{...typography.md_text}}
`;

export const DropDownItem = styled.View`
    flex-direction: row;
    height: 70px;
    padding: 12px;
    background-color: white;
    text-align: left;
`;

export const DropDownText = styled(TimeText)`
    ${{...typography.md_text}}
    text-align: left;
    align-self: center;
`;
