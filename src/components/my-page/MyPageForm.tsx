import React from 'react';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';
import MyPage from './MyPage';
import {useRoute} from '@react-navigation/native';
import {ScreenName} from '../../interfaces/NavigationBar';

export default function MyPageForm() {
  const route = useRoute();
  const currentScreen = (route.params as {screen?: ScreenName})?.screen;

  return (
    <>
      <MyPage />
      <NavigationBar currentScreen={currentScreen} />
    </>
  );
}
