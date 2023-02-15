import { createStackNavigator } from "@react-navigation/stack";
import { NAVIGATION } from "constants/navigation";
import FreshPage from "@/screens/FreshPage/FreshPage";

const Stack = createStackNavigator();

export default function FreshNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={NAVIGATION.FRESH} component={FreshPage}/>
        </Stack.Navigator>
    )
}