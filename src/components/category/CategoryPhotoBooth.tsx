import React, {useState, useEffect, useRef} from 'react';
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
import SkeletonGetMoreCategoryPhotoBooth from '../reuse/skeleton/SkeletonGetMoreCategoryPhotoBooth';
import {FlatList} from 'react-native';
import UpIcon from '../../assets/image/icon/btn_up.svg';
import {CategoryPhotoBoothProps} from '../../interfaces/Category.interface';
import {CategoryEventUpScrollImageBox} from '../../styles/layout/category/CategoryEvent.style';
import SearchNoData from '../reuse/alert/SearchNoData';

export default function CategoryPhotoBooth() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const route = useRoute();

  // 무한 스크롤 페이지
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const flatListRef = useRef<FlatList>(null);
  const handleScrollToTop = () => {
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  };

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

  const onEndReached = () => {
    const newPage = page + 1;
    setPage(newPage);

    const moreData = Array(24)
      .fill(null)
      .map((_, index) => ({
        ...photoBoothTempData[0],
        photoBoothID: newPage * 24 + index + 1,
      }));

    setPhotoBoothTempData(prevData => [...prevData, ...moreData]);
  };

  const renderPhotoBoothItem = ({item}: {item: CategoryPhotoBoothProps}) => (
    <PhotoBoothItem
      key={item.photoBoothID}
      onPress={() => onPressPhotoBooth(item.photoBoothID)}>
      <PhotoBoothLogo source={{uri: item.representativeImage}} />
      <FontWhiteSmallerMedium>{item.photoboothName}</FontWhiteSmallerMedium>
    </PhotoBoothItem>
  );

  useEffect(() => {
    // 예시 async ~await로 정상적으로 데이터 fetch완료시 실행
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <CategoryPhotoBoothContainer>
      {!isLoading ? (
        <>
          {photoBoothTempData.length > 0 ? (
            <>
              <FlatList
                data={photoBoothTempData}
                keyExtractor={item => item.photoBoothID.toString()}
                ref={flatListRef}
                renderItem={renderPhotoBoothItem}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.1}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-evenly'}}
                ListFooterComponent={SkeletonGetMoreCategoryPhotoBooth}
              />
              <CategoryEventUpScrollImageBox onPress={handleScrollToTop}>
                <UpIcon />
              </CategoryEventUpScrollImageBox>
            </>
          ) : (
            <SearchNoData
              alertText="현재 앱에 등록된 포토부스가 없습니다."
              recommendText="추후 앱에 포토부스 추가 예정입니다."
            />
          )}
        </>
      ) : (
        <SkeletonCategoryPhotoBooth />
      )}
    </CategoryPhotoBoothContainer>
  );
}
