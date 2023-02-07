import { Provider, useSelector } from "react-redux";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import store from "./src/store";
import StackNavigator from "./src/navigation/stackNavigation";
import {dark, light} from './src/theme/theme';

console.log(DarkTheme);

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer theme={dark}>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App