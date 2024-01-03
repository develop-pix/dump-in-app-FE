import AppleIcon from '../../assets/image/icon/apple_login.svg';
import {
    AppleIconWrapper,
    AppleInfoContainer,
    AppleLoginContainer,
    AppleText,
} from '../../styles/layout/login/AppleLogin.style';

export default function AppleLogin() {
    const loginWithApple = async () => {};

    return (
        <AppleLoginContainer>
            <AppleInfoContainer activeOpacity={1} onPress={loginWithApple}>
                <AppleIconWrapper>
                    <AppleIcon width={24} height={24} />
                </AppleIconWrapper>
                <AppleText>Apple로 로그인</AppleText>
            </AppleInfoContainer>
        </AppleLoginContainer>
    );
}
