import React from 'react';
import { useRoute } from '@react-navigation/native';

import { ScreenName } from '../../interfaces/NavigationBar';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';

import Login from './Login';

export default function LoginForm() {
    const route = useRoute();
    const currentScreen = (route.params as { screen: ScreenName }).screen;

    return (
        <>
            <Login />
            <NavigationBar currentScreen={currentScreen} />
        </>
    );
}
