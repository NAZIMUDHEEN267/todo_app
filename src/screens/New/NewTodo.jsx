import React, { useEffect } from 'react'
import Container from '@/components/Container';
import { CalenderBtn, CalenderPicker, Message, MessageInput, MessagePicker, PickerBtn, SelectedDate } from './style';
import { SET_ITEM } from 'slices/storageSlice';
import { useDispatch } from 'react-redux';
import idCreator from 'helper/idCreator';
import { currentDate } from 'helper/Date';
import shadow from 'theme/shadow';
import Evil from "react-native-vector-icons/EvilIcons";
import Material from "react-native-vector-icons/MaterialIcons";
import { LIGHT_ORANGE } from 'constants/colors';

const NewTodo = () => {
  const dispatch = useDispatch();

  function handleClick() {
    const obj = {
      id: idCreator(currentDate),
      message: "bath time",
      start_time: 7,
      end_time: 8,
      color: "blue",
      day: true,
      reminder: true
    }
    console.log("onhandle", obj.id);

    dispatch(SET_ITEM({ obj, currentDate }));
  }

  useEffect(() => {
    // handleClick();
  }, [])

  return (
    <Container>
      <Message style={shadow("rgba(0,0,0,0.4)")}>
        <MessagePicker>
          <PickerBtn>
            <Material name={"stop-circle"} size={15} style={{ color: "green" }} />
          </PickerBtn>
        </MessagePicker>
        <MessageInput />

        <MessagePicker>
          <PickerBtn>
            <Evil name={"pencil"} size={35} style={{ color: "rgba(0,0,0,0.4)" }} />
          </PickerBtn>
        </MessagePicker>
      </Message>
      <Message style={shadow("rgba(0,0,0,0.4)")}>
        <CalenderPicker>
          <CalenderBtn>
            <Evil name={"calendar"} size={35} style={{ backgroundColor: LIGHT_ORANGE, color: "crimson" }} />
          </CalenderBtn>
        </CalenderPicker>
        <MessageInput />

        <MessagePicker>
          <PickerBtn>
            <Evil name={"pencil"} size={35} style={{ color: "rgba(0,0,0,0.4)" }} />
          </PickerBtn>
        </MessagePicker>
      </Message>
    </Container>
  )
}

export default NewTodo;