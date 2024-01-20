import { KakaoOAuthToken, login } from '@react-native-seoul/kakao-login';
import { useNavigation } from '@react-navigation/native';

import KaKaoIcon from 'assets/image/icon/kakao_login.svg';
import { setAccessToken } from 'hooks/redux/AccessTokenSlice';
import { useAppDispatch } from 'hooks/redux/store';
import { setUserID, setUserNickName } from 'hooks/redux/UserDataSlice';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
import {
    KakaoIconWrapper,
    KakaoInfoContainer,
    KaKaoLoginContainer,
    KaKaoText,
} from 'styles/layout/login/KaKaoLogin.style';

export default function KakaoLogin() {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<MyPageStackScreenProps<'Login'>['navigation']>();

    const loginWithKakao = async (): Promise<void> => {
        const token: KakaoOAuthToken = await login();
        console.log('카카오 AccessToken: ', token.accessToken);
        // 서버에 accessToken 토큰 전송하고 JWT토큰, userID, userNickName 받아서 리덕스에 저장
        dispatch(setAccessToken('asdqwemalskd'));
        dispatch(setUserID('jsee53'));
        dispatch(setUserNickName('지나가는 오리너구리'));

        navigation.navigate('MyPage');
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
