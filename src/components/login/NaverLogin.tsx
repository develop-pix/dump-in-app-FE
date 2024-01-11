import NaverLoginModule, { NaverLoginRequest } from '@react-native-seoul/naver-login';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import NaverIcon from 'assets/image/icon/naver_login.svg';
import { setAccessToken } from 'hooks/redux/AccessTokenSlice';
import { useAppDispatch } from 'hooks/redux/store';
import { setUserID, setUserNickName } from 'hooks/redux/UserDataSlice';
import { RootStackParam } from 'interfaces/NavigationBar';
import {
    NaverIconWrapper,
    NaverInfoContainer,
    NaverLoginContainer,
    NaverText,
} from 'styles/layout/login/NaverLogin.style';

// TODO: 추후 env 파일에서 관리
const naverKeys: NaverLoginRequest = {
    consumerKey: 'ji5vu5qZOVy8WaXAoJSP',
    consumerSecret: 'rxarsLeCXz',
    appName: 'dump-in',
    serviceUrlScheme: 'org.reactjs.native.example.dump-in-app-FE', // iOS 용 스키마 등록
};

export default function NaverLogin() {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const route = useRoute();

    const loginWithNaver = async () => {
        try {
            const loginResult = await NaverLoginModule.login(naverKeys);
            if (loginResult.isSuccess && loginResult.successResponse) {
                console.log('네이버 AccessToken: ', loginResult.successResponse.accessToken);

                // 서버에 accessToken 토큰 전송하고 JWT토큰, userID, userNickName 받아서 리덕스에 저장
                dispatch(setAccessToken('asdqwemalskd'));
                dispatch(setUserID('jsee53'));
                dispatch(setUserNickName('지나가는 오리너구리'));

                navigation.push('MyPage');
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
