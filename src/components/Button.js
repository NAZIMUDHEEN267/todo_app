import React from 'react'
import styled from "styled-components/native";
import { useTheme } from '@react-navigation/native';
import { typography } from '../theme/typography';
import { useDispatch } from 'react-redux';
import { SET_ITEM } from '../slices/storageSlice';
import { PRIMARY_COLOR } from '../constants/colors';

const Button = (props) => {

    const dispatch = useDispatch();
    const { colors } = useTheme();

    return (
        <ButtonContainer
            onPress={() => dispatch(SET_ITEM({
                message: "something...",
                start_time: 8,
                end_time: "8:30",
                color: "pink",
                day: true,
                reminder: true
            }))}
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
