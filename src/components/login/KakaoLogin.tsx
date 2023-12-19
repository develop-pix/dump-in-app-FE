import React from 'react';
import {
  KaKaoLoginContainer,
  KaKaoIconWrapper,
  KaKaoIcon,
  KaKaoText,
} from '../../styles/layout/login/KaKaoLogin.style';

export default function KakaoLogin() {
  const loginWithKakao = async () => {};

  return (
    <KaKaoLoginContainer>
      <KaKaoIconWrapper activeOpacity={1} onPress={loginWithKakao}>
        <KaKaoIcon
          source={require('../../assets/image/login/kakao-login.png')}
        />
        <KaKaoText>카카오 로그인</KaKaoText>
      </KaKaoIconWrapper>
    </KaKaoLoginContainer>
  );
}
