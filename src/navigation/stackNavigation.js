import { createStackNavigator } from "@react-navigation/stack";
import { NAVIGATION } from "../constants/navigation";
import Home from "../screens/Home/Home";
import LightButton from "../components/LightButton";

const Stack = createStackNavigator();

export default function StackNavigator(props) {
    return (
        <Stack.Navigator screenOptions={() => ({
            headerRight: () => <LightButton {...props}/>
        })}>
            <Stack.Screen name={NAVIGATION.HOME} component={Home} options={() => ({
                title: "November 12"
            })}/>
        </Stack.Navigator>
    )
}