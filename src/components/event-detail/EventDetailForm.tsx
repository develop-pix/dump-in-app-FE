import React from 'react';
import { useRoute } from '@react-navigation/native';

import { ScreenName } from '../../interfaces/NavigationBar';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';

import EventDetail from './EventDetail';

export default function EventDetailForm() {
    const route = useRoute();
    const currentScreen = (route.params as { screen: ScreenName }).screen;

    return (
        <>
            <EventDetail />
            <NavigationBar currentScreen={currentScreen} />
        </>
    );
}
