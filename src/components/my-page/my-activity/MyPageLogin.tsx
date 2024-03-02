import { useIsFocused, useNavigation } from '@react-navigation/native';

import { NormalButton } from 'components/reuse/button/NormalButton';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
import { LoginButtonContainer } from 'styles/layout/my-page/MyActivity/LoginButton.style';

export default function MyPageLogin() {
    const navigation = useNavigation<MyPageStackScreenProps<'MyPage'>['navigation']>();
    const isFocused = useIsFocused();

    const handleLogin = () => {
        if (isFocused) {
            navigation.navigate('Login');
        }
    };

    return (
        <LoginButtonContainer>
            <NormalButton text="로그인 하러가기" onPress={handleLogin} />
        </LoginButtonContainer>
    );
}
