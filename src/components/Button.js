import React from 'react'
import styled from "styled-components/native";
import { useTheme } from '@react-navigation/native';
import { typography } from '../theme/typography';

const Button = (props) => {

    const { colors } = useTheme();

    return (
        <ButtonContainer
            style={{ backgroundColor: colors.button }}
            activeOpacity={.7}
        >
            <Text style={{ color: colors.buttonTxt }}>+ Add new task</Text>
        </ButtonContainer>
    )
}

 const Text = styled.Text`
    text-align: center;
    ${{ ...typography.text }}
`;

const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    borderRadius: 15px;
    padding: 15px;
`;


export default Button