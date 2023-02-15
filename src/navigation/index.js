import { useState } from 'react';
import AppNavigator from './AppNavigation';
import { light, dark } from '@/theme/theme';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { useSelector } from 'react-redux';
import FreshNavigator from './FreshNavigation';
import { useDispatch } from 'react-redux'
import { CHECK_USER } from 'slices/userSlice'

// ignore all warning
// LogBox.ignoreAllLogs();

export default function MainNavigator() {
    const [theme, setTheme] = useState(false);
    const { isUserFirst } = useSelector(state => state.checkUser);
    const dispatch = useDispatch();

    return (
        <NavigationContainer theme={theme ? dark : light}>
            {isUserFirst ?
                <AppNavigator themeCb={setTheme} /> :
                <FreshNavigator />}
        </NavigationContainer>
    )
}