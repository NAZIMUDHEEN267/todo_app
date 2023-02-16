import React from 'react'
import styled from "styled-components/native";
import { useTheme } from '@react-navigation/native';
import { typography } from '@/theme/typography';
import { PRIMARY_COLOR } from '@/constants/colors';

const Button = ({eventHandler, btnText}) => {

    const { colors } = useTheme();

    return (
        <ButtonContainer
            onPress={eventHandler}
            style={{ backgroundColor: PRIMARY_COLOR}}
            activeOpacity={.7}
        >
            <Text style={{ color: colors.buttonTxt }}>{btnText}</Text>
        </ButtonContainer>
    )
}

 const Text = styled.Text`
    text-align: center;
    ${{ ...typography.text }}
`;

const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    border-radius: 15px;
    padding: 15px;
`;


export default Button
