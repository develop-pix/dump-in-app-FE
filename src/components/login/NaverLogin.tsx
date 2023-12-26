import React from 'react';
import {
  NaverLoginContainer,
  NaverInfoContainer,
  NaverIconWrapper,
  NaverText,
} from '../../styles/layout/login/NaverLogin.style';
import NaverIcon from '../../assets/image/icon/naver_login.svg';
import {useAppDispatch} from '../../hooks/redux/store';
import {setAccessToken} from '../../hooks/redux/AccessTokenSlice';
import {setUserID, setUserNickName} from '../../hooks/redux/UserDataSlice';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../interfaces/NavigationBar';
import {ScreenName} from '../../interfaces/NavigationBar';
import {Linking} from 'react-native';

export default function NaverLogin() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const route = useRoute();

  const loginWithNaver = async (): Promise<void> => {
    try {
      // 임시 리다이렉트 URL
      const redirectUrl =
        'https://api-dev.dump-in.co.kr/app/api/auth/naver/redirect';

      await Linking.openURL(redirectUrl);
    } catch (error) {
      console.error('Error during Naver login:', error);
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
    <NaverLoginContainer>
      <NaverInfoContainer activeOpacity={1} onPress={loginWithNaver}>
        <NaverIconWrapper>
          <NaverIcon width={44} height={44} />
        </NaverIconWrapper>
        <NaverText>네이버로 로그인</NaverText>
      </NaverInfoContainer>
    </NaverLoginContainer>
  );
}
