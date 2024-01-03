import { useState } from 'react';

import {
    AppDescriptionWrapper,
    LoginComponentsContainer,
    LoginContainer,
    LogoIcon,
} from '../../styles/layout/login/Login.style';
import { FontWhiteBiggerSemiboldWithTextAlign } from '../../styles/layout/reuse/text/Text.style';
import MyPageMenu from '../my-page/MyPageMenu';
import MyPageBar from '../reuse/header/MyPageBar';

import AppleLogin from './AppleLogin';
import KakaoLogin from './KakaoLogin';
import NaverLogin from './NaverLogin';

// 로고 사진 수정 필요, 추후 로그인 구현
export default function Login() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    return (
        <LoginContainer>
            <MyPageBar setMenuVisible={setMenuVisible} />
            <LoginComponentsContainer>
                <LogoIcon source={require('../../assets/image/source/filter-knee.png')} resizeMode="cover" />
                <AppDescriptionWrapper>
                    <FontWhiteBiggerSemiboldWithTextAlign>
                        덤핀 서비스 설명글 간단하게 한두줄 정도
                    </FontWhiteBiggerSemiboldWithTextAlign>
                </AppDescriptionWrapper>
                <KakaoLogin />
                <NaverLogin />
                <AppleLogin />
            </LoginComponentsContainer>

            <MyPageMenu visible={isMenuVisible} setMenuVisible={setMenuVisible} />
        </LoginContainer>
    );
}
