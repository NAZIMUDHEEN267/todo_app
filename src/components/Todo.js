import { View, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    BottomLine,
    MessageStatus,
    StatusContainer,
    TodoMessage,
    Todo,
    TodoText,
    TodoTime
} from "../screens/Home/style";
import shadow from '../theme/shadow';

const TodoItem = ({item}) => {

    const { colors } = useTheme();

    return (
        <Todo>
            <TodoMessage style={shadow("blue")}>
                <TodoText>{"hello"}</TodoText>
                <BottomLine />
                <StatusContainer>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <FontAwesome name="clock-o" size={15} color={"green"} style={{ marginRight: 8 }} />
                        <MessageStatus>
                            {3} pm - {2} pm
                        </MessageStatus>
                    </View>
                    <TouchableOpacity activeOpacity={.5}>
                        <FontAwesome name={"edit"} size={18} />
                    </TouchableOpacity>
                </StatusContainer>
            </TodoMessage>
            <TodoTime style={{ color: colors.sm_text }}>{5} AM</TodoTime>
        </Todo>
    )
}

export default TodoItem;