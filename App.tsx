import { useState} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import StackNavigator from '@/navigation/stackNavigation';
import {light, dark} from '@/theme/theme';
import store from '@/store';
import { persistor } from '@/store';

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
