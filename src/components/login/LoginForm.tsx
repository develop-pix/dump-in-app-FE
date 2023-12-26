import React from 'react';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';
import Login from './Login';
import {useRoute} from '@react-navigation/native';
import {ScreenName} from '../../interfaces/NavigationBar';

export default function LoginForm() {
  const route = useRoute();
  const currentScreen = (route.params as {screen: ScreenName}).screen;

  return (
    <>
      <Login />
      <NavigationBar currentScreen={currentScreen} />
    </>
  );
}
