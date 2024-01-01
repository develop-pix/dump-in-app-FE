import React from 'react';
import {
  AppleLoginContainer,
  AppleInfoContainer,
  AppleIconWrapper,
  AppleText,
} from '../../styles/layout/login/AppleLogin.style';
import AppleIcon from '../../assets/image/icon/apple_login.svg';
import {
  appleAuth,
  appleAuthAndroid,
} from '@invertase/react-native-apple-authentication';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import {Platform} from 'react-native';
export default function AppleLogin() {
  const platform = Platform.OS;

  //ios 에서 Apple Login
  const loginWithApple = async () => {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );
    if (credentialState === appleAuth.State.AUTHORIZED) {
      //아래로 토큰 반환됨
      console.log(appleAuthRequestResponse.identityToken);
    }
  };

  //android 에서 Apple Login (오류 발생)
  const loginWithAppleWebView = async () => {
    console.log('안드로이드에서 선택됨');
    const rawNonce = uuid();
    const state = uuid();
    appleAuthAndroid.configure({
      clientId: 'dump-in.co.kr',
      redirectUri: 'https://api-dev.dump-in.co.kr/app/api/auth/apple/login',
      responseType: appleAuthAndroid.ResponseType.ALL,
      scope: appleAuthAndroid.Scope.ALL,
      nonce: rawNonce,
      state,
    });

    const appleAuthRequestResponse = await appleAuthAndroid.signIn();
    console.log(appleAuthRequestResponse);
  };

  return (
    <AppleLoginContainer>
      <AppleInfoContainer
        activeOpacity={1}
        onPress={platform === 'ios' ? loginWithApple : loginWithAppleWebView}>
        <AppleIconWrapper>
          <AppleIcon width={24} height={24} />
        </AppleIconWrapper>
        <AppleText>Apple로 로그인</AppleText>
      </AppleInfoContainer>
    </AppleLoginContainer>
  );
}
