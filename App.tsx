import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        
      </NavigationContainer>
    </Provider>
  )
}

export default App