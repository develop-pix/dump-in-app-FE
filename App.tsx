import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import HomeSearch from './src/pages/HomeSearch';
import Location from './src/pages/Location';
import Category from './src/pages/Category';
import MyPage from './src/pages/MyPage';
import Branch from './src/pages/Branch';
import LocationSearch from './src/pages/LocationSearch';
import ReviewDetail from './src/pages/ReviewDetail';
import PhotoBoothDetail from './src/pages/PhotoBoothDetail';
import EventDetail from './src/pages/EventDetail';
import {ScreenProvider} from './src/utils/ScreenContext';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import store from './src/hooks/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import ReviewNew from './src/pages/ReviewNew';

const Stack = createNativeStackNavigator();
const persistor = persistStore(store);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ScreenProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="HomeSearch" component={HomeSearch} />
              <Stack.Screen
                name="Location"
                component={Location}
                initialParams={{PhotoBoothID: null}}
              />
              <Stack.Screen
                name="LocationSearch"
                component={LocationSearch}
                initialParams={{NextPage: 'BranchDetail'}}
              />
              <Stack.Screen name="Category" component={Category} />
              <Stack.Screen name="MyPage" component={MyPage} />
              <Stack.Screen
                name="Branch"
                component={Branch}
                initialParams={{branchID: 0}}
              />
              <Stack.Screen
                name="ReviewDetail"
                component={ReviewDetail}
                initialParams={{ReviewID: 0}}
              />
              <Stack.Screen
                name="PhotoBoothDetail"
                component={PhotoBoothDetail}
                initialParams={{PhotoBoothID: 0}}
              />
              <Stack.Screen
                name="EventDetail"
                component={EventDetail}
                initialParams={{EventID: 0}}
              />
              <Stack.Screen
                name="ReviewNew"
                component={ReviewNew}
                initialParams={{branchID: undefined}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ScreenProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
