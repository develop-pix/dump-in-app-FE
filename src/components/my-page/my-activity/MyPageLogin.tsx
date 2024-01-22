import { View } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import MyPageUserData from 'components/my-page/MyPageUserData';
import { NormalButton } from 'components/reuse/button/NormalButton';
import { MyPageUserDataProps } from 'interfaces/MyPage.interface';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
import { LoginButtonContainer } from 'styles/layout/my-page/MyActivity/LoginButton.style';

export default function MyPageLogin({ activeComponent, updateActiveComponent }: MyPageUserDataProps) {
    const navigation = useNavigation<MyPageStackScreenProps<'MyPage'>['navigation']>();
    const isFocused = useIsFocused();

    const handleLogin = () => {
        if (isFocused) {
            navigation.navigate('Login');
        }
    };

    return (
        <View>
            <MyPageUserData activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />

            <LoginButtonContainer>
                <NormalButton text="로그인 하러가기" onPress={handleLogin} />
            </LoginButtonContainer>
        </View>
    );
}
