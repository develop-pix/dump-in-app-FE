import React from 'react';
import {NormalButton} from '../../reuse/button/NormalButton';
import {useNavigation, useIsFocused, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';
import {ScreenName} from '../../../interfaces/NavigationBar';
import {LoginButtonContainer} from '../../../styles/layout/my-page/MyActivity/LoginButton.style';
import {MyPageUserDataProps} from '../../../interfaces/MyPage.interface';
import MyPageUserData from '../MyPageUserData';
import {View} from 'react-native';

export default function MyPageLogin({
  activeComponent,
  updateActiveComponent,
}: MyPageUserDataProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const route = useRoute();

  const handleLogin = () => {
    const currentScreen = (route.params as {screen: ScreenName}).screen;
    if (isFocused) {
      navigation.push('Login', {
        screen: currentScreen,
      });
    }
  };

  return (
    <View>
      <MyPageUserData
        activeComponent={activeComponent}
        updateActiveComponent={updateActiveComponent}
      />

      <LoginButtonContainer>
        <NormalButton text="로그인 하러가기" onPress={handleLogin} />
      </LoginButtonContainer>
    </View>
  );
}
