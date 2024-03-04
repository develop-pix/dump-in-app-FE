import { Platform } from 'react-native';
import { appleAuth, appleAuthAndroid } from '@invertase/react-native-apple-authentication';
import { useNavigation } from '@react-navigation/native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

import AppleIcon from 'assets/image/icon/apple_login.svg';
import { useAppDispatch, useAppSelector } from 'hooks/redux/store';
import { setAccessToken } from 'hooks/redux/tokenSlice';
import { setUserID, setUserNickName } from 'hooks/redux/userDataSlice';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
import {
    AppleIconWrapper,
    AppleInfoContainer,
    AppleLoginContainer,
    AppleText,
} from 'styles/layout/login/AppleLogin.style';
import { AppleSocialLogin } from 'hooks/axios/Auth';

export default function AppleLogin() {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<MyPageStackScreenProps<'Login'>['navigation']>();
    const platform = Platform.OS;
    const mobileToken = useAppSelector(state => state.token).mobileToken;

    const GetTokenLogin = async (identifyToken: string | null | undefined) => {
        console.log('애플 토큰 관련');
        console.log(identifyToken);
        try {
            if (identifyToken) {
                const socialLoginResult = await AppleSocialLogin(identifyToken, mobileToken);
                console.log(socialLoginResult);
                if (socialLoginResult.data) {
                    dispatch(setAccessToken(socialLoginResult.data.accessToken));
                    navigation.navigate('MyPage');
                }
            }
        } catch (error) {
            console.error('Apple Login Error:', error);
        }
    };

    // ios 에서 Apple Login
    const LoginWithApple = async () => {
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });
        const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
        if (credentialState === appleAuth.State.AUTHORIZED) {
            GetTokenLogin(appleAuthRequestResponse.identityToken);
        }
    };

    // android 에서 Apple Login
    const LoginWithAppleWebView = async () => {
        const rawNonce = uuid();
        const state = uuid();
        appleAuthAndroid.configure({
            clientId: 'com.dump_in_app_fe',
            redirectUri: 'https://api-dev.dump-in.co.kr/app/api/auth/apple/login',
            responseType: appleAuthAndroid.ResponseType.ALL,
            scope: appleAuthAndroid.Scope.ALL,
            nonce: rawNonce,
            state,
        });

        const appleAuthRequestResponse = await appleAuthAndroid.signIn();
        if (appleAuthRequestResponse) {
            GetTokenLogin(appleAuthRequestResponse.id_token);
        }
    };

    return (
        <AppleLoginContainer>
            <AppleInfoContainer activeOpacity={1} onPress={platform === 'ios' ? LoginWithApple : LoginWithAppleWebView}>
                <AppleIconWrapper>
                    <AppleIcon width={24} height={24} />
                </AppleIconWrapper>
                <AppleText>Apple로 로그인</AppleText>
            </AppleInfoContainer>
        </AppleLoginContainer>
    );
}
