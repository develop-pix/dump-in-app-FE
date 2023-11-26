import React from 'react';
import {
  CategoryPhotoBoothContainer,
  PhotoBoothItem,
  PhotoBoothLogo,
  PhotoBoothName,
} from '../../styles/layout/category/CategoryPhotoBooth.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../interfaces/NavigationBar';

// 임시 포토부스 데이터
const photoBoothData = Array(12)
  .fill(null)
  .map((_, index) => ({
    photoboothID: index + 1,
    'representative-image':
      'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    'photobooth-name': '포토그레이',
  }));

export default function CategoryPhotoBooth() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const onPressPhotoBooth = (id: number) => {
    navigation.push('PhotoBoothDetail', {photoboothID: id});
  };

  return (
    <CategoryPhotoBoothContainer>
      {photoBoothData.map(item => (
        <PhotoBoothItem
          key={item.photoboothID}
          onPress={() => onPressPhotoBooth(item.photoboothID)}>
          <PhotoBoothLogo source={{uri: item['representative-image']}} />
          <PhotoBoothName>{item['photobooth-name']}</PhotoBoothName>
        </PhotoBoothItem>
      ))}
    </CategoryPhotoBoothContainer>
  );
}
