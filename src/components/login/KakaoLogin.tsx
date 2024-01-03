import { KakaoOAuthToken, login } from '@react-native-seoul/kakao-login';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import KaKaoIcon from '../../assets/image/icon/kakao_login.svg';
import { setAccessToken } from '../../hooks/redux/AccessTokenSlice';
import { useAppDispatch } from '../../hooks/redux/store';
import { setUserID, setUserNickName } from '../../hooks/redux/UserDataSlice';
import { RootStackParam, ScreenName } from '../../interfaces/NavigationBar';
import {
    KakaoIconWrapper,
    KakaoInfoContainer,
    KaKaoLoginContainer,
    KaKaoText,
} from '../../styles/layout/login/KaKaoLogin.style';

export default function KakaoLogin() {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const route = useRoute();

    const loginWithKakao = async (): Promise<void> => {
        const token: KakaoOAuthToken = await login();
        console.log('카카오 AccessToken: ', token.accessToken);
        // 서버에 accessToken 토큰 전송하고 JWT토큰, userID, userNickName 받아서 리덕스에 저장
        dispatch(setAccessToken('asdqwemalskd'));
        dispatch(setUserID('jsee53'));
        dispatch(setUserNickName('지나가는 오리너구리'));

        const currentScreen = (route.params as { screen: ScreenName }).screen;
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
