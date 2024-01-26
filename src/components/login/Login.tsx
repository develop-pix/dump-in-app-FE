import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import MenuIcon from 'assets/image/icon/menu.svg';
import MyPageMenu from 'components/my-page/MyPageMenu';
import GoBackButton from 'components/reuse/button/GoBackButton';
import MyPageBar from 'components/reuse/header/MyPageBar';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
import {
    AppDescriptionWrapper,
    LoginComponentsContainer,
    LoginContainer,
    LogoIcon,
} from 'styles/layout/login/Login.style';
import {
    HeaderIconContainer,
    HeaderLeftContainer,
    HeaderRightContainer,
} from 'styles/layout/reuse/header/Header.style';
import { FontWhiteBiggerSemiboldWithTextAlign } from 'styles/layout/reuse/text/Text.style';

import AppleLogin from './AppleLogin';
import KakaoLogin from './KakaoLogin';
import NaverLogin from './NaverLogin';

// TODO: 로고 사진 수정 필요, 추후 로그인 구현
export default function Login() {
    const navigation = useNavigation<MyPageStackScreenProps<'Login'>['navigation']>();

    const [isMenuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <HeaderLeftContainer>
                        <GoBackButton />
                    </HeaderLeftContainer>
                );
            },
            headerRight: () => {
                return (
                    <HeaderRightContainer>
                        <HeaderIconContainer onPress={() => {}}>
                            <MenuIcon width={18} height={12} />
                        </HeaderIconContainer>
                    </HeaderRightContainer>
                );
            },
        });
    }, [navigation]);

    return (
        <LoginContainer>
            <LoginComponentsContainer>
                <LogoIcon source={require('assets/image/source/filter-knee.png')} resizeMode="cover" />
                <AppDescriptionWrapper>
                    <FontWhiteBiggerSemiboldWithTextAlign>
                        덤핀 서비스 설명글 간단하게 한두줄 정도
                    </FontWhiteBiggerSemiboldWithTextAlign>
                </AppDescriptionWrapper>
                <KakaoLogin />
                <NaverLogin />
                <AppleLogin />
            </LoginComponentsContainer>
        </LoginContainer>
    );
}
