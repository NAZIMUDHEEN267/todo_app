import {useEffect, useState} from 'react';
import {Provider, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import StackNavigator from './src/navigation/stackNavigation';
import {light, dark} from './src/theme/theme';
import store from './src/store';
import { persistor } from './src/store';

function App() {
  const [theme, setTheme] = useState(false);
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={theme ? dark : light}>
          <StackNavigator themeCb={setTheme} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
