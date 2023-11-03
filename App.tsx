<<<<<<< HEAD
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import Location from "./src/pages/Location";
import Category from "./src/pages/Category";
import MyPage from "./src/pages/MyPage";
=======
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Location from './src/pages/Location';
import Category from './src/pages/Category';
import MyPage from './src/pages/MyPage';
>>>>>>> master

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
<<<<<<< HEAD
        screenOptions={{ headerShown: false }}
      >
=======
        screenOptions={{headerShown: false}}>
>>>>>>> master
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="MyPage" component={MyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
