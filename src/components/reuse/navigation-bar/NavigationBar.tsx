import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationBarListItem from './NavigationBarListItem';
import CameraImage from '../../../assets/image/navigation-bar/camera.png';
import {
  NavigationBarContainer,
  CameraImageBox,
} from '../../../styles/layout/navigation-bar/NavigationBar.style';
import {RootStackParam} from '../../../interfaces/NavigationBar';
import {useScreen} from '../../../utils/ScreenContext';

export default function NavigationBar() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const {screen, setScreen} = useScreen();

  const handleListClick = (selectedScreen: string) => {
    setScreen(selectedScreen);

    switch (screen) {
      case 'Home':
        navigation.navigate('Home');
        break;
      case 'Location':
        navigation.navigate('Location');
        break;
      case 'Category':
        navigation.navigate('Category');
        break;
      case 'MyPage':
        navigation.navigate('MyPage');
        break;
      default:
    }
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
      <CameraImageBox>
        <Image source={CameraImage} />
      </CameraImageBox>

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
