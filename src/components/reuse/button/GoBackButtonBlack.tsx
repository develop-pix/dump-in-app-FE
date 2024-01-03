import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import BackBlackIcon from '../../../assets/image/icon/arrow_back_black.svg';
import { RootStackParam } from '../../../interfaces/NavigationBar';
import { BackButton } from '../../../styles/layout/reuse/button/GoBackButton.style';

export default function GoBackButtonBlack() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const onPressGoBack = () => {
        navigation.goBack();
    };
    return (
        <BackButton onPress={onPressGoBack}>
            <BackBlackIcon />
        </BackButton>
    );
}
