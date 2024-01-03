import React from 'react';
import { useRoute } from '@react-navigation/native';

import { ScreenName } from '../../interfaces/NavigationBar';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';

import Branch from './Branch';

export default function BranchForm() {
    const route = useRoute();
    const currentScreen = (route.params as { screen: ScreenName }).screen;

    return (
        <>
            <Branch />
            <NavigationBar currentScreen={currentScreen} />
        </>
    );
}
