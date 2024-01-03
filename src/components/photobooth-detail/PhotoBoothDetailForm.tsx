import React from 'react';
import { useRoute } from '@react-navigation/native';

import { ScreenName } from '../../interfaces/NavigationBar';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';

import PhotoBoothDetail from './PhotoBoothDetail';

export default function PhotoBoothDetailForm() {
    const route = useRoute();
    const currentScreen = (route.params as { screen: ScreenName }).screen;

    return (
        <>
            <PhotoBoothDetail />
            <NavigationBar currentScreen={currentScreen} />
        </>
    );
}
