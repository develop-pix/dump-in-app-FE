import React from 'react';
import NaverLoginImage from '../../assets/image/login/naver-login.png';
import {
  NaverLoginContainer,
  NaverIconWrapper,
  NaverIcon,
} from '../../styles/layout/login/NaverLogin.style';
import {FontWhiteNormalThick} from '../../styles/layout/reuse/text/Text.style';

export default function NaverLogin() {
  const loginWithNaver = async () => {};

  return (
    <NaverLoginContainer>
      <NaverIconWrapper onPress={loginWithNaver}>
        <NaverIcon source={NaverLoginImage} />
        <FontWhiteNormalThick>네이버로 로그인</FontWhiteNormalThick>
      </NaverIconWrapper>
    </NaverLoginContainer>
  );
}
