import React, { useState, useRef } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import notification from 'helper/notification';
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
} from 'screens/New/style';
import { SET_ITEM, UPDATE_ITEM } from 'slices/storageSlice';
import { useDispatch } from 'react-redux';
import idCreator from 'helper/idCreator';
import shadow from 'theme/shadow';
import Evil from "react-native-vector-icons/EvilIcons";
import Material from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  CRIMSON,
  DARK_GREEN,
  DARK_ORANGE,
  LIGHT_RED,
  PURPLE,
} from 'constants/colors';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { stringDay, stringMonth } from 'helper/Date';
import { NAVIGATION } from 'constants/navigation';
import { TODO_TYPE_DATA, TODO_REMINDER_DATA } from 'constants/data';
import { useTheme } from '@react-navigation/native';


function TodoMessage({ navigation, state, edit }) {
  const [height, setHeight] = useState(0);
  const { colors } = useTheme();
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [styles, setStyles] = useState({ label: "Select type", icon: "question", color: "grey", bg: "rgba(0,0,0,.1)" });
  const [bellStyle, setBellStyle] = useState({ label: "Reminder", icon: "question", color: "grey", bg: "rgba(0,0,0,.1)" });
  const [value, setValue] = useState({
    message: state.message,
    start_time: state.start_time,
    end_time: state.end_time,
    dayHalf: state.dayHalf,
    colors: state.colors,
    reminder: state.reminder
  });

  let inputRef = useRef();
  const dispatch = useDispatch();


  function handleClick() {

    // checking for edit or new todo
    if (edit) {
      try {
        dispatch(UPDATE_ITEM({ ...state, ...value }))
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const checkDate = date.split("/");

        if (checkDate[0].length === 1) {
          checkDate[0] = "0" + checkDate[0];
        } if (checkDate[1].length === 1) {
          checkDate[1] = "0" + checkDate[1]
        }

        const selectedDate = checkDate.join("/").split(",")[0];

        const obj = {
          id: idCreator(selectedDate),
          date: selectedDate,
          ...value
        }

        dispatch(SET_ITEM({ obj, selectedDate }));
        navigation.navigate(NAVIGATION.HOME);
      } catch (error) {
        console.log(error);
        alert("please make sure that you have filled or selected the fields...")
      }
    }
  }

  // android clock and date getter function
  function showMode(currentMode, type) {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange: function (event, selectedDate) {
        const currentDate = selectedDate || new Date();
        const stringDate = currentDate.toLocaleString();
        const timeCheck = stringDate.split(":")[0].split(",")[1];
        const stringTime = Number(timeCheck) < 10 ? "0" + stringDate.slice(11, 15) : stringDate.slice(11, 16);
        const day = stringDate.slice(19,);

        setDate(stringDate);

        if (type === "start") {
          setStartTime(stringTime + " " + day.toLocaleUpperCase());
          setValue({ ...value, day: day === "pm" ? true : false, start_time: stringTime })
        }
        else if (type === "end") {
          setEndTime(stringTime + " " + day.toUpperCase());
          setValue({ ...value, end_time: stringTime })
        }
      },
      mode: currentMode,
      is24Hour: false
    })
  }

  return (
    <Container>
      <ScrollView>

        {/* TodoMessage picker */}
        <Message style={{ height: Math.max(90, height), backgroundColor: colors.todoBox }}>
          <MessagePicker>
            <PickerBtn activeOpacity={1} onPress={notification}>
              <Material name={"stop-circle"} size={15} style={{ color: DARK_GREEN }} />
            </PickerBtn>
          </MessagePicker>
          <MessageInput
            multiline
            onContentSizeChange={(e) => setHeight(e.nativeEvent.contentSize.height)}
            ref={inputRef}
            style={{ color: colors.text }}
            placeholder={"Type your todo here"}
            placeholderTextColor={colors.text}
            value={value.message}
            onChangeText={(text) => {
              setValue({ ...value, message: text, height: height })
            }}
          />

          <MessagePicker>
            <PickerBtn onPress={() => inputRef.current.focus()}>
              <Evil name={"pencil"} size={30} style={{ color: colors.sm_text }} />
            </PickerBtn>
          </MessagePicker>
        </Message>


        {/* Time picker */}
        <Message style={{ borderBottomWidth: 0 }}>
          <TimePicker style={{ backgroundColor: colors.todoBox }}>
            <TimeBtn onPress={() => showMode('time', 'start')}>
              <Evil name={"clock"} size={30} color={DARK_ORANGE} />
            </TimeBtn>
            <TimeText style={{ color: colors.text }}>{startTime}</TimeText>
          </TimePicker>
          <Divide style={{ color: colors.sm_text }}> - </Divide>
          <TimePicker style={{ backgroundColor: colors.todoBox }}>
            <TimeBtn onPress={() => showMode('time', 'end')}>
              <Evil name={"clock"} size={30} color={DARK_ORANGE} />
            </TimeBtn>
            <TimeText style={{ color: colors.text }}>{endTime}</TimeText>
          </TimePicker>
        </Message>

        {/* Date picker */}
        <Message style={{ backgroundColor: colors.todoBox }}>
          <CalenderPicker>
            <CalenderBtn onPress={(e) => {
              if (edit) return null
              showMode('date')
            }} style={{ backgroundColor: edit ? "rgba(0,0,0,.11)" : LIGHT_RED }}
              activeOpacity={edit ? 1 : .7}
            >
              <Evil name={"calendar"} size={30} style={{ color: CRIMSON }} />
            </CalenderBtn>
          </CalenderPicker>
          <MessageInput
            value={date.length > 1 ?
              `${stringDay(date.slice(0, 9))}, ${/\//.test(date.substring(0, 2)) ? `0${date[0]}` : date.substring(0, 2)} ${stringMonth(date.slice(0, 9))}`
              : (edit) ?
                `${stringDay(state.date)}, ${/\//.test(state.date.substring(0, 2)) ? `0${state.date[0]}` : state.date.substring(0, 2)} ${stringMonth(state.date)}`
              :
                ""}
            editable={false}
            style={{ color: colors.text, fontSize: 17, fontWeight: "500", fontFamily: "poppins" }}
          />

          <MessagePicker />
        </Message>


        {/* Types of Todo */}
        <Dropdown
          style={{
            margin: 16,
            height: 70,
            backgroundColor: colors.todoBox,
            borderRadius: 12,
            padding: 12,
            ...shadow("#000")
          }}
          selectedTextStyle={{
            color: colors.text,
            fontSize: 17,
            fontWeight: 500,
            fontFamily: "poppins",
          }}
          placeholder={styles.label}
          placeholderStyle={{
            fontSize: 17,
            fontWeight: 500,
            fontFamily: "poppins",
            color: colors.sm_text
          }}

          data={TODO_TYPE_DATA}
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
            <DropDownItem style={{ backgroundColor: colors.todoBox }}>
              <MessagePicker pointerEvents={"none"}>
                <PickerBtn style={{ backgroundColor: bgClr }} activeOpacity={1}>
                  <FontAwesome name={icon} size={21} color={color} />
                </PickerBtn>
              </MessagePicker>
              <DropDownText>{label}</DropDownText>
            </DropDownItem>
          )}
          renderLeftIcon={() => (
            <MessagePicker pointerEvents={"none"}>
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
            backgroundColor: colors.todoBox,
            borderRadius: 12,
            padding: 12,
            ...shadow("#000")
          }}
          selectedTextStyle={{
            color: colors.text,
            fontSize: 17,
            fontWeight: 500,
            fontFamily: "poppins",
          }}
          placeholderStyle={{
            fontSize: 17,
            fontWeight: 500,
            fontFamily: "poppins",
            color: colors.sm_text
          }}
          data={TODO_REMINDER_DATA}
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
            <DropDownItem style={{ backgroundColor: colors.todoBox }}>
              <MessagePicker>
                <PickerBtn style={{ backgroundColor: bgClr }} activeOpacity={1}>
                  <FontAwesome name={icon} size={21} color={color} />
                </PickerBtn>
              </MessagePicker>
              <DropDownText>{label}</DropDownText>
            </DropDownItem>
          )}
          renderLeftIcon={() => (
            <MessagePicker pointerEvents={"none"}>
              <PickerBtn style={{ backgroundColor: bellStyle.bg }} activeOpacity={1}>
                <FontAwesome name={bellStyle.icon} size={21} color={bellStyle.color} />
              </PickerBtn>
            </MessagePicker>
          )}
        />

      </ScrollView>

      {/* Save button */}
      <Button btnText={"Save"} eventHandler={handleClick} />
    </Container>
  )
}

export default TodoMessage;