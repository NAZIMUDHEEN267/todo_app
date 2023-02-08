import { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/store";
import StackNavigator from "./src/navigation/stackNavigation";
import { light, dark } from "./src/theme/theme";

function App (){  
  const [theme, setTheme] = useState(false);
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme ? dark : light}>
        <StackNavigator themeCb={setTheme}/>
      </NavigationContainer>
    </Provider>
  )
}

export default App