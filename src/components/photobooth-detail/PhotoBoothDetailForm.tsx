import React from 'react';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';
import PhotoBoothDetail from './PhotoBoothDetail';
import {useRoute} from '@react-navigation/native';
import {ScreenName} from '../../interfaces/NavigationBar';

export default function PhotoBoothDetailForm() {
  const route = useRoute();
  const currentScreen = (route.params as {screen?: ScreenName})?.screen;

  return (
    <>
      <PhotoBoothDetail />
      <NavigationBar currentScreen={currentScreen} />
    </>
  );
}
