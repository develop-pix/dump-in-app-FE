import React from 'react';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';
import EventDetail from './EventDetail';
import {useRoute} from '@react-navigation/native';
import {ScreenName} from '../../interfaces/NavigationBar';

export default function EventDetailForm() {
  const route = useRoute();
  const currentScreen = (route.params as {screen?: ScreenName})?.screen;

  return (
    <>
      <EventDetail />
      <NavigationBar currentScreen={currentScreen} />
    </>
  );
}
