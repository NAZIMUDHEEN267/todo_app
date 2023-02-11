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
import { RED, DARK_GREEN } from "@/constants/colors";

const TodoItem = ({ item }) => {

    const { colors } = useTheme();

    return (
        <Todo>
            <TodoMessage style={shadow("green")}>
                <TodoText>{item.message}</TodoText>
                <BottomLine />
                <StatusContainer>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <FontAwesome name="clock-o" size={15} color={DARK_GREEN} style={{ marginRight: 8 }} />
                        <MessageStatus>
                            {item.start_time} - {item.end_time}
                        </MessageStatus>
                    </View>
                    {/* Todo delete button */}
                    <TouchableOpacity>
                        <AntDesign name="delete" size={20} color={RED} />
                    </TouchableOpacity>
                    {/* Todo edit button */}
                    <TouchableOpacity activeOpacity={.5} >
                        <FontAwesome name={"edit"} size={18} />
                    </TouchableOpacity>
                </StatusContainer>
            </TodoMessage>
            <TodoTime style={{ color: colors.sm_text }}>{item.start_time}</TodoTime>
        </Todo>
    )
}

export default TodoItem;