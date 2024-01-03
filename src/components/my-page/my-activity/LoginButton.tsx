import React from 'react';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParam, ScreenName } from '../../../interfaces/NavigationBar';
import { LoginButtonContainer } from '../../../styles/layout/my-page/MyActivity/LoginButton.style';
import { NormalButton } from '../../reuse/button/NormalButton';

export default function Login() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const isFocused = useIsFocused();
    const route = useRoute();

    const handleLogin = () => {
        const currentScreen = (route.params as { screen: ScreenName }).screen;
        if (isFocused) {
            navigation.push('Login', {
                screen: currentScreen,
            });
        }
    };

    return (
        <LoginButtonContainer>
            <NormalButton text="로그인 하러가기" onPress={handleLogin} />
        </LoginButtonContainer>
    );
}
