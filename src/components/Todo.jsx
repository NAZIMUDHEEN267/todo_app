import { View, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from "react-native-vector-icons/AntDesign";
import {
    BottomLine,
    MessageStatus,
    StatusContainer,
    TodoMessage,
    Todo,
    TodoText,
    TodoTime
} from "@/screens/Home/style";
import shadow from '@/theme/shadow';
import { RED } from "@/constants/colors";
import { DELETE_ITEM } from "slices/storageSlice";
import { useDispatch } from "react-redux";
import { NAVIGATION } from "constants/navigation";
import { GREY_COLOR } from "constants/colors";

const TodoItem = ({ item, navigation }) => {

    const { colors } = useTheme();
    const dispatch = useDispatch();

    return (
        <Todo>
            <TodoMessage style={{...shadow(item.colors.color), backgroundColor: item.colors.bg || colors.box}}>
                <TodoText style={{color: item.colors.bg ? "#000" : colors.text}}>{item.message}</TodoText>
                <BottomLine />
                <StatusContainer>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <FontAwesome name="clock-o" size={15} color={item.colors.color || colors.text} style={{ marginRight: 8 }} />
                        <MessageStatus style={{color: item.colors.bg ? GREY_COLOR : colors.text }}>
                            {item.start_time} - {item.end_time}
                        </MessageStatus>
                    </View>
                    {/* Todo delete button */}
                    <TouchableOpacity onPress={() => dispatch(DELETE_ITEM({id: item.id, date: item.date}))}>
                        <AntDesign name="delete" size={20} color={RED} />
                    </TouchableOpacity>
                    {/* Todo edit button */}
                    <TouchableOpacity activeOpacity={.5} onPress={() => navigation.navigate(NAVIGATION.EDIT, {data: item})}>
                        <FontAwesome name={"edit"} size={18} style={{ color: item.colors.bg ? GREY_COLOR : colors.text }} />
                    </TouchableOpacity>
                </StatusContainer>
            </TodoMessage>
            <TodoTime style={{ color: colors.sm_text }}>{item.start_time}</TodoTime>
        </Todo>
    )
}

export default TodoItem;