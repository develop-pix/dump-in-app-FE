import { Platform } from 'react-native';
import { appleAuth, appleAuthAndroid } from '@invertase/react-native-apple-authentication';
import { useNavigation } from '@react-navigation/native';
import 'react-native-get-random-values';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import AppleIcon from 'assets/image/icon/apple_login.svg';
import { AppleSocialLogin } from 'hooks/axios/Auth';
import { storage } from 'hooks/mmkv/storage';
import { setIsLoggedIn } from 'hooks/redux/loginSlice';
import { RootStackScreenProps } from 'interfaces/Navigation.interface';
import {
    AppleIconWrapper,
    AppleInfoContainer,
    AppleLoginContainer,
    AppleText,
} from 'styles/layout/login/AppleLogin.style';

export default function AppleLogin() {
    const navigation = useNavigation<RootStackScreenProps<'Login'>['navigation']>();
    const platform = Platform.OS;
    const mobileToken = storage.getString('token.mobileToken');
    const dispatch = useDispatch();

    const GetTokenLogin = async (identifyToken: string | null | undefined) => {
        try {
            if (identifyToken) {
                const socialLoginResult = await AppleSocialLogin(identifyToken, mobileToken);
                if (socialLoginResult.data) {
                    storage.set('token.accessToken', socialLoginResult.data.accessToken.token);
                    storage.set('token.refreshToken', socialLoginResult.data.refreshToken.token);
                    storage.set('token.refreshTokenExpire', socialLoginResult.data.refreshToken.expiredAt);
                    dispatch(setIsLoggedIn(true));

                    navigation.pop();
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
