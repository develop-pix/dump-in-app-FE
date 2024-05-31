import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Logo from 'assets/image/icon/logo.svg';
import GoBackButton from 'components/reuse/button/GoBackButton';
import { RootStackScreenProps } from 'interfaces/Navigation.interface';
import { LoginComponentsContainer, LoginContainer, LogoIconContainer } from 'styles/layout/login/Login.style';
import { HeaderLeftContainer } from 'styles/layout/reuse/header/Header.style';

import AppleLogin from './AppleLogin';
import KakaoLogin from './KakaoLogin';
import NaverLogin from './NaverLogin';

export default function Login() {
    const navigation = useNavigation<RootStackScreenProps<'Login'>['navigation']>();

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
                <LogoIconContainer>
                    <Logo />
                </LogoIconContainer>
                <KakaoLogin />
                <NaverLogin />
                <AppleLogin />
            </LoginComponentsContainer>
        </LoginContainer>
    );
}
