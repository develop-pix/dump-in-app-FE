import React from 'react';
import {
  CategoryPhotoBoothContainer,
  PhotoBoothItem,
  PhotoBoothLogo,
} from '../../styles/layout/category/CategoryPhotoBooth.style';
import {useNavigation, useIsFocused, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../interfaces/NavigationBar';
import {FontWhiteSmallerMedium} from '../../styles/layout/reuse/text/Text.style';
import {ScreenName} from '../../interfaces/NavigationBar';

// 임시 포토부스 데이터
const photoBoothData = Array(12)
  .fill(null)
  .map((_, index) => ({
    PhotoBoothID: index + 1,

    representativeImage:
      'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    photoboothName: '포토그레이',
  }));

export default function CategoryPhotoBooth() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const route = useRoute();

  const onPressPhotoBooth = (id: number) => {
    const currentScreen = (route.params as {screen: ScreenName}).screen;
    if (isFocused) {
      navigation.push('PhotoBoothDetail', {
        PhotoBoothID: id,
        screen: currentScreen,
      });
    }
  };

  return (
    <CategoryPhotoBoothContainer>
      {photoBoothData.map(item => (
        <PhotoBoothItem
          key={item.PhotoBoothID}
          onPress={() => onPressPhotoBooth(item.PhotoBoothID)}>
          <PhotoBoothLogo source={{uri: item.representativeImage}} />
          <FontWhiteSmallerMedium>{item.photoboothName}</FontWhiteSmallerMedium>
        </PhotoBoothItem>
      ))}
    </CategoryPhotoBoothContainer>
  );
}
