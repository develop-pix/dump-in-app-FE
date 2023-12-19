import React from 'react';
import {
  NaverLoginContainer,
  NaverIconWrapper,
  NaverIcon,
} from '../../styles/layout/login/NaverLogin.style';

export default function NaverLogin() {
  const loginWithNaver = async () => {};

  return (
    <NaverLoginContainer>
      <NaverIconWrapper activeOpacity={1} onPress={loginWithNaver}>
        <NaverIcon
          source={require('../../assets/image/login/naver-login.png')}
        />
      </NaverIconWrapper>
    </NaverLoginContainer>
  );
}
