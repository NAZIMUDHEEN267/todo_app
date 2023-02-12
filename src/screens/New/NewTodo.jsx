import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { Calendar } from 'react-native-calendars';
import {
  CalenderBtn,
  CalenderContainer,
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
import shadow from 'theme/shadow';
import Evil from "react-native-vector-icons/EvilIcons";
import Material from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  CRIMSON,
  DARK_BLUE,
  DARK_CYAN,
  DARK_GREEN,
  DARK_ORANGE,
  DARK_PINK,
  DARK_YELLOW,
  LIGHT_BLUE,
  LIGHT_CYAN,
  LIGHT_GREEN,
  LIGHT_PINK,
  LIGHT_YELLOW,
  SHADOW_COLOR
} from 'constants/colors';
import Container from '@/components/Container';
import Button from 'components/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { stringDay, stringMonth, currentDate } from 'helper/Date';
import { NAVIGATION } from 'constants/navigation';

const NewTodo = ({ navigation }) => {
  const dispatch = useDispatch();

  const [height, setHeight] = useState(0);
  const [date, setDate] = useState("");
  const [showCalender, setShowCalender] = useState(false);

  const [value, setValue] = useState({
    message: "",
    start_time: 0,
    end_time: 0,
    day: false,
    colors: {},
    reminder: false,
    height
  });


  function handleClick(e) {
    if (date.length < 1) {
      e.preventDefault();
    }
    const obj = {
      id: idCreator(date),
      ...value
    }

    dispatch(SET_ITEM({ obj, currentDate }));
    navigation.navigate(NAVIGATION.HOME)
  }

  const [styles, setStyles] = useState({ label: "Select type", icon: "question", color: "grey", bg: "rgba(0,0,0,.1)" });
  const [bellStyle, setBellStyle] = useState({ label: "Reminder", icon: "question", color: "grey", bg: "rgba(0,0,0,.1)" });

  const todoTypeData = [
    { label: 'Work', value: '1', bgClr: LIGHT_PINK, color: DARK_PINK, icon: "briefcase" },
    { label: 'Habit', value: '2', bgClr: LIGHT_BLUE, color: DARK_BLUE, icon: "book" },
    { label: 'Shopping', value: '3', bgClr: LIGHT_YELLOW, color: DARK_YELLOW, icon: "shopping-cart" },
    { label: 'Today', value: '4', bgClr: LIGHT_GREEN, color: DARK_GREEN, icon: "sun-o" }
  ];

  const reminderData = [
    { label: 'On', value: '1', bgClr: LIGHT_CYAN, color: DARK_CYAN, icon: "bell-o" },
    { label: 'Off', value: '2', bgClr: LIGHT_CYAN, color: DARK_CYAN, icon: "bell-slash-o" }
  ];

  return (
    <Container>
      <ScrollView>

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
            <CalenderBtn onPress={() => setShowCalender(true)}>
              <Evil name={"calendar"} size={30} style={{ color: CRIMSON }} />
            </CalenderBtn>
          </CalenderPicker>
          <MessageInput value={date.length > 1 ?
            `${stringDay(date)}, ${date.substring(8, 10)} ${stringMonth(date)}`
            : ""} />

          <MessagePicker />
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
          style={{
            margin: 16,
            height: 70,
            backgroundColor: 'white',
            borderRadius: 12,
            padding: 12,
            ...shadow("#000")
          }}
          placeholder={styles.label}
          placeholderStyle={{
            fontSize: 17,
            fontWeight: 500,
            fontFamily: "poppins"
          }}
          data={todoTypeData}
          labelField="label"
          valueField="value"
          onChange={(item) => {
            setStyles({
              color: item.color,
              label: item.label,
              bg: item.bgClr,
              icon: item.icon
            });
            setValue({
              ...value, colors: {
                bg: item.bgClr,
                color: item.color
              }
            });
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
              <PickerBtn style={{ backgroundColor: styles.bg }} activeOpacity={1}>
                <FontAwesome name={styles.icon} size={21} color={styles.color} />
              </PickerBtn>
            </MessagePicker>
          )}
        />

        {/* Reminder of Todo */}
        <Dropdown
          style={{
            margin: 16,
            height: 70,
            backgroundColor: 'white',
            borderRadius: 12,
            padding: 12,
            ...shadow("#000")
          }}
          placeholderStyle={{
            fontSize: 17,
            fontWeight: 500,
            fontFamily: "poppins"
          }}
          data={reminderData}
          placeholder={bellStyle.label}
          labelField="label"
          valueField="value"
          onChange={(item) => {
            setBellStyle({
              color: item.color,
              label: item.label,
              bg: item.bgClr,
              icon: item.icon
            });
            setValue({
              ...value, reminder: item.value === "1" ? true : false
            });
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
              <PickerBtn style={{ backgroundColor: bellStyle.bg }} activeOpacity={1}>
                <FontAwesome name={bellStyle.icon} size={21} color={bellStyle.color} />
              </PickerBtn>
            </MessagePicker>
          )}
        />

        {/* calender */}
        {
          showCalender ?
            <CalenderContainer>
              <Calendar
                onDayPress={(day) => {
                  setDate(day.dateString);
                  setShowCalender(false);
                }}
              />
            </CalenderContainer>
            : null
        }
        
      </ScrollView>

      {/* Save button */}
      <Button btnText={"Save"} eventHandler={handleClick} />
    </Container>
  )
}

export default NewTodo;