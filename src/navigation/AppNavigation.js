import { createStackNavigator } from "@react-navigation/stack";
import { NAVIGATION } from "@/constants/navigation";
import Home from "@/screens/Home/Home";
import NewTodo from "@/screens/New/NewTodo";
import LightButton from "@/components/LightButton";
import { fullDate } from "@/helper/Date";

const Stack = createStackNavigator();

export default function AppNavigator(props) {
    return (
        <Stack.Navigator screenOptions={() => ({
            headerRight: () => <LightButton {...props}/>
        })}>
            <Stack.Screen name={NAVIGATION.HOME} component={Home} options={() => ({
                title: fullDate
            })}/>
            <Stack.Screen name={NAVIGATION.NewTodo} component={NewTodo} 
                options={() => ({
                    title: "Edit",
                    headerTitleStyle: {marginLeft: "60%"}
                })}
            />
        </Stack.Navigator>
    )
}