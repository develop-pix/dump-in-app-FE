import React from 'react';
import {
  AppleLoginContainer,
  AppleInfoContainer,
  AppleIconWrapper,
  AppleText,
} from '../../styles/layout/login/AppleLogin.style';
import AppleIcon from '../../assets/image/icon/apple_login.svg';

export default function AppleLogin() {
  const loginWithApple = async (): Promise<void> => {};

  return (
    <AppleLoginContainer>
      <AppleInfoContainer activeOpacity={1} onPress={loginWithApple}>
        <AppleIconWrapper>
          <AppleIcon width={24} height={24} />
        </AppleIconWrapper>
        <AppleText>Apple로 로그인</AppleText>
      </AppleInfoContainer>
    </AppleLoginContainer>
  );
}
