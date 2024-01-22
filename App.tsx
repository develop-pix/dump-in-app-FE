import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import store from 'hooks/redux/store';
import RootStackNavigation from 'navigation/RootStackNavigation';
import { ScreenProvider } from 'utils/ScreenContext';

const persistor = persistStore(store);

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ScreenProvider>
                    <NavigationContainer>
                        <RootStackNavigation />
                    </NavigationContainer>
                </ScreenProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
