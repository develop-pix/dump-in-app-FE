import { KakaoOAuthToken, login } from '@react-native-seoul/kakao-login';
import { useNavigation } from '@react-navigation/native';

import KaKaoIcon from 'assets/image/icon/kakao_login.svg';
import { KakaoSocialLogin } from 'hooks/axios/Auth';
import { useAppDispatch, useAppSelector } from 'hooks/redux/store';
import { setAccessToken } from 'hooks/redux/tokenSlice';
import { setUserID, setUserNickName } from 'hooks/redux/userDataSlice';
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
    const mobileToken = useAppSelector(state => state.token).mobileToken;

    const loginWithKakao = async (): Promise<void> => {
        try {
            const token: KakaoOAuthToken = await login();
            if (token.accessToken) {
                const socialLoginResult = await KakaoSocialLogin(token.accessToken, mobileToken);
                if (socialLoginResult.data) {
                    dispatch(setAccessToken(socialLoginResult.data.accessToken));
                    
                    //userID, userNickName 받아서 리덕스에 저장
                    dispatch(setUserID('jsee53'));
                    dispatch(setUserNickName('지나가는 오리너구리'));
    
                    navigation.navigate('MyPage');
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
