import React, { useEffect } from 'react'
import Container from '@/components/Container';
import { Message, MessageInput, MessagePicker, SelectedDate } from './style';
import { SET_ITEM } from 'slices/storageSlice';
import { useDispatch } from 'react-redux';
import idCreator from 'helper/idCreator';
import { currentDate } from 'helper/Date';

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

    dispatch(SET_ITEM({obj, currentDate}));
  }

  useEffect(() => {
    handleClick();
  }, [])

  return (
    <Container>
      <Message>
        <MessageInput />
        <MessagePicker>
          <SelectedDate>hello</SelectedDate>
        </MessagePicker>
      </Message>
    </Container>
  )
}

export default NewTodo;