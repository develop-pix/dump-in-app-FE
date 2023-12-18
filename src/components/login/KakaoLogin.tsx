import React from 'react';
import KakaoLogins from '@react-native-seoul/kakao-login';
import KaKaoLoginImage from '../../assets/image/login/kakao-login.png';
import {
  KaKaoLoginContainer,
  KaKaoIconWrapper,
  KaKaoIcon,
} from '../../styles/layout/login/KaKaoLogin.style';

export default function KakaoLogin() {
  const loginWithKakao = async () => {
    try {
      const token = await KakaoLogins.login();
      console.log('token', token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <KaKaoLoginContainer>
      <KaKaoIconWrapper onPress={loginWithKakao}>
        <KaKaoIcon source={KaKaoLoginImage} />
      </KaKaoIconWrapper>
    </KaKaoLoginContainer>
  );
}
