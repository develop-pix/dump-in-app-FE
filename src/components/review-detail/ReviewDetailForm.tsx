import React from 'react';
import { useRoute } from '@react-navigation/native';

import { ScreenName } from '../../interfaces/NavigationBar';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';

import ReviewDetail from './ReviewDetail';

export default function ReviewDetailForm() {
    const route = useRoute();
    const currentScreen = (route.params as { screen: ScreenName }).screen;

    return (
        <>
            <ReviewDetail />
            <NavigationBar currentScreen={currentScreen} />
        </>
    );
}
