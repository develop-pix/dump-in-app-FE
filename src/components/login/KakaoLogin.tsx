import React from 'react';
import {
  KaKaoLoginContainer,
  KakaoInfoContainer,
  KakaoIconWrapper,
  KaKaoText,
} from '../../styles/layout/login/KaKaoLogin.style';
import KaKaoIcon from '../../assets/image/icon/kakao_login.svg';
import {useAppDispatch} from '../../hooks/redux/store';
import {setAccessToken} from '../../hooks/redux/AccessTokenSlice';
import {setUserID, setUserNickName} from '../../hooks/redux/UserDataSlice';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../interfaces/NavigationBar';
import {ScreenName} from '../../interfaces/NavigationBar';
import {Linking} from 'react-native';

export default function KakaoLogin() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const route = useRoute();

  const loginWithKakao = async (): Promise<void> => {
    try {
      // 임시 리다이렉트 URL
      const redirectUrl =
        'https://api-dev.dump-in.co.kr/app/api/auth/kakao/redirect';

      await Linking.openURL(redirectUrl);
    } catch (error) {
      console.error('Error during Kakao login:', error);
    }

    dispatch(setAccessToken('asdqwemalskd'));
    dispatch(setUserID('jsee53'));
    dispatch(setUserNickName('지나가는 오리너구리'));

    const currentScreen = (route.params as {screen: ScreenName}).screen;
    navigation.push('MyPage', {
      screen: currentScreen,
    });
  };

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
