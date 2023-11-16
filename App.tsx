import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Location from './src/pages/Location';
import Category from './src/pages/Category';
import MyPage from './src/pages/MyPage';
import Branch from './src/pages/Branch';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen
          name="Branch"
          component={Branch}
          initialParams={{branchID: 0}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
