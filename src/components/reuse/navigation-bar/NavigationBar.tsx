import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationBarListItem from './NavigationBarListItem';
import CameraImage from '../../../assets/image/navigation-bar/camera.png';
import {
  NavigationBarContainer,
  ReviewNewItem,
} from '../../../styles/layout/navigation-bar/NavigationBar.style';
import {RootStackParam} from '../../../interfaces/NavigationBar';
import {useScreen} from '../../../utils/ScreenContext';
import {ScreenName} from '../../../interfaces/NavigationBar';

export default function NavigationBar() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const {screen, setScreen} = useScreen();

  const handleListClick = (selectedScreen: ScreenName) => {
    setScreen(selectedScreen);

    // 네이게이션 바로 이동한 기본 페이지들에서는 이전 페이지로 돌아가지 못하도록 스택 초기화
    navigation.reset({
      index: 0,
      routes: [{name: selectedScreen}],
    });
  };

  const onPressRegistrationReview = () => {
    navigation.push('ReviewNew', {branchID: undefined});
  };

  return (
    <NavigationBarContainer>
      <NavigationBarListItem
        screen="Home"
        selectedScreen={screen}
        handleListClick={handleListClick}
      />
      <NavigationBarListItem
        screen="Location"
        selectedScreen={screen}
        handleListClick={handleListClick}
      />

      <ReviewNewItem onPress={onPressRegistrationReview}>
        <Image source={CameraImage} />
      </ReviewNewItem>

      <NavigationBarListItem
        screen="Category"
        selectedScreen={screen}
        handleListClick={handleListClick}
      />
      <NavigationBarListItem
        screen="MyPage"
        selectedScreen={screen}
        handleListClick={handleListClick}
      />
    </NavigationBarContainer>
  );
}
