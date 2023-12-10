import React from 'react';
import Branch from './Branch';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';
import {useRoute} from '@react-navigation/native';
import {ScreenName} from '../../interfaces/NavigationBar';

export default function BranchForm() {
  const route = useRoute();
  const currentScreen = (route.params as {screen: ScreenName}).screen;

  return (
    <>
      <Branch />
      <NavigationBar currentScreen={currentScreen} />
    </>
  );
}
