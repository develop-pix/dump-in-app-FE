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
import OfficialImageDetail from './src/pages/OfficialImageDetail';
import {ScreenProvider} from './src/utils/ScreenContext';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import store from './src/hooks/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import ReviewNew from './src/pages/ReviewNew';
import Login from './src/pages/Login';
import ReviewEdit from './src/pages/ReviewEdit';

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
              <Stack.Screen
                name="Home"
                component={Home}
                initialParams={{screen: 'Home'}}
              />
              <Stack.Screen
                name="HomeSearch"
                component={HomeSearch}
                initialParams={{screen: 'HomeSearch', PhotoBoothName: null}}
              />
              <Stack.Screen
                name="Location"
                component={Location}
                initialParams={{screen: 'Location', PhotoBoothID: null}}
              />
              <Stack.Screen
                name="Category"
                component={Category}
                initialParams={{screen: 'Category'}}
              />
              <Stack.Screen
                name="MyPage"
                component={MyPage}
                initialParams={{screen: 'MyPage'}}
              />
              <Stack.Screen
                name="LocationSearch"
                component={LocationSearch}
                initialParams={{
                  screen: 'LocationSearch',
                  NextPage: 'BranchDetail',
                }}
              />
              <Stack.Screen
                name="Branch"
                component={Branch}
                initialParams={{screen: 'Branch', branchID: 0}}
              />
              <Stack.Screen
                name="OfficialImageDetail"
                component={OfficialImageDetail}
                initialParams={{
                  screen: 'OfficialImageDetail',
                  photoBoothName: null,
                  image: '',
                  index: 0,
                }}
              />
              <Stack.Screen
                name="ReviewDetail"
                component={ReviewDetail}
                initialParams={{screen: 'ReviewDetail', reviewID: null}}
              />
              <Stack.Screen
                name="PhotoBoothDetail"
                component={PhotoBoothDetail}
                initialParams={{screen: 'PhotoBoothDetail', PhotoBoothID: 0}}
              />
              <Stack.Screen
                name="EventDetail"
                component={EventDetail}
                initialParams={{screen: 'EventDetail', EventID: 0}}
              />
              <Stack.Screen
                name="ReviewNew"
                component={ReviewNew}
                initialParams={{screen: 'ReviewNew', branchID: null}}
              />
              <Stack.Screen
                name="ReviewEdit"
                component={ReviewEdit}
                initialParams={{screen: 'ReviewEdit', ReviewID: null}}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                initialParams={{screen: 'Login'}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ScreenProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
