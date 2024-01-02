import React, {useState, useEffect} from 'react';
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
import SkeletonCategoryPhotoBooth from '../reuse/skeleton/SkeletonCategoryPhotoBooth';
import SearchNoData from '../reuse/alert/SearchNoData';
import {ScrollView} from 'react-native';

export default function CategoryPhotoBooth() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const route = useRoute();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onPressPhotoBooth = (id: number) => {
    const currentScreen = (route.params as {screen: ScreenName}).screen;
    if (isFocused) {
      navigation.push('PhotoBoothDetail', {
        PhotoBoothID: id,
        screen: currentScreen,
      });
    }
  };

  const [photoBoothTempData, setPhotoBoothTempData] = useState(() =>
    Array(24)
      .fill(null)
      .map((_, index) => ({
        photoBoothID: index + 1,
        representativeImage:
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        photoboothName: '포토그레이',
      })),
  );

  useEffect(() => {
    // 예시 async ~await로 정상적으로 데이터 fetch완료시 실행
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {!isLoading ? (
        <ScrollView>
          {photoBoothTempData.length > 0 ? (
            <CategoryPhotoBoothContainer>
              {photoBoothTempData.map(item => (
                <PhotoBoothItem
                  key={item.photoBoothID}
                  onPress={() => onPressPhotoBooth(item.photoBoothID)}>
                  <PhotoBoothLogo source={{uri: item.representativeImage}} />
                  <FontWhiteSmallerMedium>
                    {item.photoboothName}
                  </FontWhiteSmallerMedium>
                </PhotoBoothItem>
              ))}
            </CategoryPhotoBoothContainer>
          ) : (
            <SearchNoData
              alertText="현재 앱에 등록된 포토부스가 없습니다."
              recommendText="추후 앱에 포토부스 추가 예정입니다."
            />
          )}
        </ScrollView>
      ) : (
        <SkeletonCategoryPhotoBooth />
      )}
    </>
  );
}
