import React from 'react';
import {
  NaverLoginContainer,
  NaverInfoContainer,
  NaverIconWrapper,
  NaverText,
} from '../../styles/layout/login/NaverLogin.style';
import NaverIcon from '../../assets/image/icon/naver_login.svg';

export default function NaverLogin() {
  const loginWithNaver = async () => {};

  return (
    <NaverLoginContainer>
      <NaverInfoContainer activeOpacity={1} onPress={loginWithNaver}>
        <NaverIconWrapper>
          <NaverIcon width={44} height={44} />
        </NaverIconWrapper>
        <NaverText>네이버 로그인</NaverText>
      </NaverInfoContainer>
    </NaverLoginContainer>
  );
}
