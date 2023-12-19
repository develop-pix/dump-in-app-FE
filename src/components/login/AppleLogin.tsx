import React from 'react';
import AppleLoginImage from '../../assets/image/login/apple-login.png';
import {
  AppleLoginContainer,
  AppleIconWrapper,
  AppleIcon,
} from '../../styles/layout/login/AppleLogin.style';

export default function AppleLogin() {
  const loginWithApple = async () => {};

  return (
    <AppleLoginContainer>
      <AppleIconWrapper activeOpacity={1} onPress={loginWithApple}>
        <AppleIcon source={AppleLoginImage} />
      </AppleIconWrapper>
    </AppleLoginContainer>
  );
}
