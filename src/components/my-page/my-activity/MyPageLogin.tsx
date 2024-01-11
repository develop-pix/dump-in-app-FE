import { View } from 'react-native';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import MyPageUserData from 'components/my-page/MyPageUserData';
import { NormalButton } from 'components/reuse/button/NormalButton';
import { MyPageUserDataProps } from 'interfaces/MyPage.interface';
import { RootStackParam, ScreenName } from 'interfaces/NavigationBar';
import { LoginButtonContainer } from 'styles/layout/my-page/MyActivity/LoginButton.style';

export default function MyPageLogin({ activeComponent, updateActiveComponent }: MyPageUserDataProps) {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const route = useRoute();

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
