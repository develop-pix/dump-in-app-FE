import NaverLoginModule, { NaverLoginRequest } from '@react-native-seoul/naver-login';
import { useNavigation } from '@react-navigation/native';
import Config from 'react-native-config';

import NaverIcon from 'assets/image/icon/naver_login.svg';
import { NaverSocialLogin } from 'hooks/axios/Auth';
import { useAppDispatch, useAppSelector } from 'hooks/redux/store';
import { setAccessToken } from 'hooks/redux/tokenSlice';
import { setUserID, setUserNickName } from 'hooks/redux/userDataSlice';
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
    const dispatch = useAppDispatch();
    const navigation = useNavigation<MyPageStackScreenProps<'Login'>['navigation']>();
    const mobileToken = useAppSelector(state => state.token).mobileToken;

    const loginWithNaver = async () => {
        try {
            const loginResult = await NaverLoginModule.login(naverKeys);

            if (loginResult.isSuccess && loginResult.successResponse) {
                const socialLoginResult = await NaverSocialLogin(loginResult.successResponse.accessToken, mobileToken);
                if (socialLoginResult.data) {
                    dispatch(setAccessToken(socialLoginResult.data.accessToken));
                    //userID, userNickName 받아서 리덕스에 저장
                    dispatch(setUserID('jsee53'));
                    dispatch(setUserNickName('지나가는 오리너구리'));

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
