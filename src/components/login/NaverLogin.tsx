import NaverLoginModule, { NaverLoginRequest } from '@react-native-seoul/naver-login';
import { useNavigation } from '@react-navigation/native';
import Config from 'react-native-config';
import { useDispatch } from 'react-redux';

import NaverIcon from 'assets/image/icon/naver_login.svg';
import { NaverSocialLogin } from 'hooks/axios/Auth';
import { storage } from 'hooks/mmkv/storage';
import { setIsLoggedIn } from 'hooks/redux/userDataSlice';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
import {
    NaverIconWrapper,
    NaverInfoContainer,
    NaverLoginContainer,
    NaverText,
} from 'styles/layout/login/NaverLogin.style';

const naverKeys: NaverLoginRequest = {
    consumerKey: Config.NAVER_LOGIN_CONSUMER_KEY,
    consumerSecret: Config.NAVER_CONSUMER_SECRET,
    appName: 'dump-in',
    serviceUrlScheme: 'org.reactjs.native.example.dump-in-app-FE', // iOS 용 스키마 등록
};

export default function NaverLogin() {
    const navigation = useNavigation<MyPageStackScreenProps<'Login'>['navigation']>();
    const mobileToken = storage.getString('token.mobileToken');
    const dispatch = useDispatch();

    const loginWithNaver = async () => {
        try {
            const loginResult = await NaverLoginModule.login(naverKeys);

            if (loginResult.isSuccess && loginResult.successResponse) {
                const socialLoginResult = await NaverSocialLogin(loginResult.successResponse.accessToken, mobileToken);
                if (socialLoginResult.data) {
                    storage.set('token.accessToken', socialLoginResult.data.accessToken);
                    storage.set('token.refreshToken', socialLoginResult.data.refreshToken);
                    dispatch(setIsLoggedIn(true));

                    navigation.navigate('MyPage');
                }
            }
        } catch (error) {
            console.error('Naver Login Error:', error);
        }
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
