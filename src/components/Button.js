import React from 'react'
import styled from "styled-components/native";
import { useTheme } from '@react-navigation/native';
import { typography } from '../theme/typography';
import { useDispatch } from 'react-redux';
import { postItem } from '../slices/storageSlice';
import { LIGHT_BLUE, PRIMARY_COLOR } from '../constants/colors';

const Button = (props) => {

    const set = useDispatch();
    const { colors } = useTheme();

    return (
        <ButtonContainer
            onPress={() => set(postItem())}
            style={{ backgroundColor: PRIMARY_COLOR}}
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
