import React from 'react';
import {
  KaKaoLoginContainer,
  KakaoInfoContainer,
  KakaoIconWrapper,
  KaKaoText,
} from '../../styles/layout/login/KaKaoLogin.style';
import KaKaoIcon from '../../assets/image/icon/kakao_login.svg';

export default function KakaoLogin() {
  const loginWithKakao = async () => {};

  return (
    <KaKaoLoginContainer>
      <KakaoInfoContainer activeOpacity={1} onPress={loginWithKakao}>
        <KakaoIconWrapper>
          <KaKaoIcon width={20} height={20} />
        </KakaoIconWrapper>
        <KaKaoText>카카오로 로그인</KaKaoText>
      </KakaoInfoContainer>
    </KaKaoLoginContainer>
  );
}
