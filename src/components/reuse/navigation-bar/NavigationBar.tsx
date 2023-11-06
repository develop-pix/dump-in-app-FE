import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationBarListItem from './NavigationBarListItem';
import CameraImage from '../../../assets/favicon/navigation-bar/camera.png';
import {
  Container,
  ImageBox,
} from '../../../styles/styled-components/navigation-bar/NavigationBar';
import {RootStackParam} from '../../../interfaces/NavigationBar';

export default function NavigationBar() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

  const route = useRoute();

  // 현재 화면의 이름을 가져와 selectedScreen 상태로 설정
  const [selectedScreen, setSelectedScreen] = useState<string>('');

  useEffect(() => {
    if (route.name) {
      setSelectedScreen(route.name);
    }
  }, [route.name]);

  const handleListClick = (screen: string) => {
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
    <Container>
      <NavigationBarListItem
        screen="Home"
        selectedScreen={selectedScreen}
        handleListClick={handleListClick}
      />
      <NavigationBarListItem
        screen="Location"
        selectedScreen={selectedScreen}
        handleListClick={handleListClick}
      />
      <ImageBox>
        <Image source={CameraImage} />
      </ImageBox>

      <NavigationBarListItem
        screen="Category"
        selectedScreen={selectedScreen}
        handleListClick={handleListClick}
      />
      <NavigationBarListItem
        screen="MyPage"
        selectedScreen={selectedScreen}
        handleListClick={handleListClick}
      />
    </Container>
  );
}
