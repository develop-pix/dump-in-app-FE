import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import store from 'hooks/redux/store';
import RootStackNavigation from 'navigation/RootStackNavigation';
import { ScreenProvider } from 'utils/ScreenContext';

const persistor = persistStore(store);

const App = () => {
    useEffect(() => {
        const init = async () => {
            // …do multiple sync or async tasks
        };

        init().finally(async () => {
            await BootSplash.hide({ fade: true });
        });
    }, []);

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
