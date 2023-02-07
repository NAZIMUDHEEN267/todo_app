import { createStackNavigator } from "@react-navigation/stack";
import { NAVIGATION } from "../constants/navigation";
import Home from "../screens/Home/Home";

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={NAVIGATION.HOME} component={Home} options={() => ({
                title: "November 12"
            })}/>
        </Stack.Navigator>
    )
}