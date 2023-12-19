import React from 'react';
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
        <AppleIcon
          source={require('../../assets/image/login/apple-login.png')}
        />
      </AppleIconWrapper>
    </AppleLoginContainer>
  );
}
