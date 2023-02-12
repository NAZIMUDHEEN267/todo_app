import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import {
  CalenderBtn,
  CalenderPicker,
  Divide,
  DropDownItem,
  DropDownText,
  Message,
  MessageInput,
  MessagePicker,
  PickerBtn,
  TimeBtn,
  TimePicker,
  TimeText
} from './style';
import { SET_ITEM } from 'slices/storageSlice';
import { useDispatch } from 'react-redux';
import idCreator from 'helper/idCreator';
import { currentDate } from 'helper/Date';
import shadow from 'theme/shadow';
import Evil from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Material from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  CRIMSON,
  DARK_BLUE,
  DARK_GREEN,
  DARK_ORANGE,
  DARK_PINK,
  DARK_YELLOW,
  LIGHT_BLUE,
  LIGHT_GREEN,
  LIGHT_PINK,
  LIGHT_YELLOW,
  SHADOW_COLOR
} from 'constants/colors';
import Container from '@/components/Container';
import { typography } from 'theme/typography';

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
  }, []);

  const [height, setHeight] = useState(0);

  const [value, setValue] = useState(null);
  console.log(value);

  const data = [
    { label: 'Work', value: '1', bgClr: LIGHT_PINK, color: DARK_PINK, icon: "briefcase" },
    { label: 'Habit', value: '2', bgClr: LIGHT_BLUE, color: DARK_BLUE, icon: "book" },
    { label: 'Shopping', value: '3', bgClr: LIGHT_YELLOW, color: DARK_YELLOW, icon: "shopping-cart" },
    { label: 'Today', value: '4', bgClr: LIGHT_GREEN, color: DARK_GREEN, icon: "sun-o" }
  ];

  return (
    <Container>

      {/* Message picker */}
      <Message style={{ height: Math.max(90, height) }}>
        <MessagePicker>
          <PickerBtn activeOpacity={1}>
            <Material name={"stop-circle"} size={15} style={{ color: DARK_GREEN }} />
          </PickerBtn>
        </MessagePicker>
        <MessageInput
          multiline
          onContentSizeChange={(e) => setHeight(e.nativeEvent.contentSize.height)}
        />

        <MessagePicker>
          <PickerBtn>
            <Evil name={"pencil"} size={30} style={{ color: SHADOW_COLOR }} />
          </PickerBtn>
        </MessagePicker>
      </Message>

      {/* Date picker */}
      <Message>
        <CalenderPicker>
          <CalenderBtn>
            <Evil name={"calendar"} size={30} style={{ color: CRIMSON }} />
          </CalenderBtn>
        </CalenderPicker>
        <MessageInput />

        <MessagePicker>
          <PickerBtn>
            <Evil name={"pencil"} size={30} style={{ color: SHADOW_COLOR }} />
          </PickerBtn>
        </MessagePicker>
      </Message>

      {/* Time picker */}
      <Message style={{ borderBottomWidth: 0 }}>
        <TimePicker>
          <TimeBtn>
            <Evil name={"clock"} size={30} color={DARK_ORANGE} />
          </TimeBtn>
          <TimeText>00</TimeText>
        </TimePicker>
        <Divide> - </Divide>
        <TimePicker>
          <TimeBtn>
            <Evil name={"clock"} size={30} color={DARK_ORANGE} />
          </TimeBtn>
          <TimeText>00</TimeText>
        </TimePicker>
      </Message>

      {/* Types of Todo */}
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={{
          fontSize: 17,
          fontWeight: 500,
          fontFamily: "poppins"
        }}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select type"
        value={value}
        onChange={item => {
          setValue(item);
        }}
        renderItem={({ label, bgClr, color, icon }) => (
          <DropDownItem>
            <MessagePicker>
              <PickerBtn style={{ backgroundColor: bgClr }} activeOpacity={1}>
                <FontAwesome name={icon} size={21} color={color} />
              </PickerBtn>
            </MessagePicker>
            <DropDownText>{label}</DropDownText>
          </DropDownItem>
        )}
        renderLeftIcon={() => (
          <MessagePicker>
            <PickerBtn style={{ backgroundColor: "rgba(0,0,0,.1)" }} activeOpacity={1}>
              <FontAwesome name={'question'} size={21} />
            </PickerBtn>
          </MessagePicker>
        )}
      />

    </Container>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    ...shadow("#000")
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default NewTodo;