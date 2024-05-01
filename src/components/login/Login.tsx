import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import GoBackButton from 'components/reuse/button/GoBackButton';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
import { LoginComponentsContainer, LoginContainer, LogoIcon } from 'styles/layout/login/Login.style';
import { HeaderLeftContainer } from 'styles/layout/reuse/header/Header.style';

import AppleLogin from './AppleLogin';
import KakaoLogin from './KakaoLogin';
import NaverLogin from './NaverLogin';

export default function Login() {
    const navigation = useNavigation<MyPageStackScreenProps<'Login'>['navigation']>();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <HeaderLeftContainer>
                        <GoBackButton />
                    </HeaderLeftContainer>
                );
            },
        });
    }, [navigation]);

    return (
        <LoginContainer>
            <LoginComponentsContainer>
                <LogoIcon source={require('assets/image/source/logo.png')} resizeMode="contain" />
                <KakaoLogin />
                <NaverLogin />
                <AppleLogin />
            </LoginComponentsContainer>
        </LoginContainer>
    );
}
