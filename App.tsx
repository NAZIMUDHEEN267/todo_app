import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from '@/store';
import {persistor} from '@/store';
import MainNavigator from 'navigation';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
