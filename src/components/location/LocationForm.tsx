import React from 'react';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';
import Map from './map/Map';
import {useRoute} from '@react-navigation/native';
import {ScreenName} from '../../interfaces/NavigationBar';

export default function LocationForm() {
  const route = useRoute();
  const currentScreen = (route.params as {screen: ScreenName}).screen;

  return (
    <>
      <Map />
      <NavigationBar currentScreen={currentScreen} />
    </>
  );
}
