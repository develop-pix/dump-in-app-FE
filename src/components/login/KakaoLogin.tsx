import { KakaoOAuthToken, login } from '@react-native-seoul/kakao-login';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import KaKaoIcon from 'assets/image/icon/kakao_login.svg';
import { KakaoSocialLogin } from 'hooks/axios/Auth';
import { storage } from 'hooks/mmkv/storage';
import { setIsLoggedIn } from 'hooks/redux/loginSlice';
import { RootStackScreenProps } from 'interfaces/Navigation.interface';
import {
    KakaoIconWrapper,
    KakaoInfoContainer,
    KaKaoLoginContainer,
    KaKaoText,
} from 'styles/layout/login/KaKaoLogin.style';

export default function KakaoLogin() {
    const navigation = useNavigation<RootStackScreenProps<'Login'>['navigation']>();
    const mobileToken = storage.getString('token.mobileToken');
    const dispatch = useDispatch();

    const loginWithKakao = async (): Promise<void> => {
        try {
            const token: KakaoOAuthToken = await login();
            if (token.accessToken) {
                const socialLoginResult = await KakaoSocialLogin(token.accessToken, mobileToken);
                if (socialLoginResult.data) {
                    storage.set('token.accessToken', socialLoginResult.data.accessToken.token);
                    storage.set('token.refreshToken', socialLoginResult.data.refreshToken.token);
                    storage.set('token.refreshTokenExpire', socialLoginResult.data.refreshToken.expiredAt);
                    dispatch(setIsLoggedIn(true));

                    navigation.pop();
                }
            }
        } catch (error) {
            console.error('Kakao Login Error:', error);
        }
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
