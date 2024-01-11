import { Platform } from 'react-native';
import { appleAuth, appleAuthAndroid } from '@invertase/react-native-apple-authentication';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

import AppleIcon from 'assets/image/icon/apple_login.svg';
import { setAccessToken } from 'hooks/redux/AccessTokenSlice';
import { useAppDispatch } from 'hooks/redux/store';
import { setUserID, setUserNickName } from 'hooks/redux/UserDataSlice';
import { RootStackParam } from 'interfaces/NavigationBar';
import {
    AppleIconWrapper,
    AppleInfoContainer,
    AppleLoginContainer,
    AppleText,
} from 'styles/layout/login/AppleLogin.style';

export default function AppleLogin() {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const route = useRoute();
    const platform = Platform.OS;

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

    const GetTokenLogin = (accessToken: string | null | undefined) => {
        if (accessToken) {
            // Login API 연동
            dispatch(setAccessToken('asdqwemalskd'));
            dispatch(setUserID('jsee53'));
            dispatch(setUserNickName('지나가는 오리너구리'));
        }

        navigation.push('MyPage');
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
