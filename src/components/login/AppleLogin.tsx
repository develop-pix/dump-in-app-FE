import React from 'react';
import {
  AppleLoginContainer,
  AppleInfoContainer,
  AppleIconWrapper,
  AppleText,
} from '../../styles/layout/login/AppleLogin.style';
import AppleIcon from '../../assets/image/icon/apple_login.svg';
import {useAppDispatch} from '../../hooks/redux/store';
import {setAccessToken} from '../../hooks/redux/AccessTokenSlice';
import {setUserID, setUserNickName} from '../../hooks/redux/UserDataSlice';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../interfaces/NavigationBar';
import {ScreenName} from '../../interfaces/NavigationBar';
import {Linking} from 'react-native';

export default function AppleLogin() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const route = useRoute();

  const loginWithApple = async (): Promise<void> => {
    try {
      // 임시 리다이렉트 URL
      const redirectUrl =
        'https://api-dev.dump-in.co.kr/app/api/auth/apple/redirect';

      await Linking.openURL(redirectUrl);
    } catch (error) {
      console.error('Error during Apple login:', error);
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
