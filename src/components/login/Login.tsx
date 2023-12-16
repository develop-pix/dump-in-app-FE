import React, {useState} from 'react';
import MyPageBar from '../reuse/header/MyPageBar';
import KakaoLogin from './KakaoLogin';
import NaverLogin from './NaverLogin';
import AppleLogin from './AppleLogin';
import {
  LoginContainer,
  LoginComponentsContainer,
  LogoIcon,
} from '../../styles/layout/login/Login.style';
import LogoImage from '../../assets/image/dummy/img_official.png';
import MyPageMenu from '../my-page/MyPageMenu';

// 로고 사진 수정 필요, 추후 로그인 구현
export default function Login() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <LoginContainer>
      <MyPageBar setMenuVisible={setMenuVisible} />
      <LoginComponentsContainer>
        <LogoIcon source={LogoImage} resizeMode="cover" />
        <KakaoLogin />
        <NaverLogin />
        <AppleLogin />
      </LoginComponentsContainer>

      <MyPageMenu visible={isMenuVisible} setMenuVisible={setMenuVisible} />
    </LoginContainer>
  );
}
