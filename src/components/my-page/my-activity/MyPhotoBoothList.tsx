import React, {useState, useEffect, useRef, useCallback} from 'react';
import MyPhotoBoothFrame from './MyPhotoBoothFrame';
import {
  MyPhotoBoothListContainer,
  MyPhotoBoothFrameContainer,
  SkeletonPhotoBoothContainer,
} from '../../../styles/layout/my-page/MyActivity/MyPhotoBoothList.style';
import {MyPhotoBoothFrameType} from '../../../interfaces/MyPage.interface';
import SkeletonMyPagePhotoBooth from '../../reuse/skeleton/SkeletonMyPagePhotoBooth';
import SkeletonGetMoreMyPagePhotoBooth from '../../reuse/skeleton/SkeletonGetMoreMyPagePhotoBooth';
import {FlatList} from 'react-native';
import {MyPageUserDataProps} from '../../../interfaces/MyPage.interface';
import MyPageUserData from '../MyPageUserData';
import {UpScrollButton} from '../../reuse/button/UpScrollButton';

export default function MyPhotoBoothList({
  activeComponent,
  updateActiveComponent,
}: MyPageUserDataProps) {
  // 무한 스크롤 페이지
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [photoBoothData, setPhotoBoothData] = useState<MyPhotoBoothFrameType[]>(
    [],
  );
  const flatListRef = useRef<FlatList>(null);

  const renderHeader = useCallback(() => {
    return (
      <MyPageUserData
        activeComponent={activeComponent}
        updateActiveComponent={updateActiveComponent}
      />
    );
  }, [activeComponent, updateActiveComponent]);

  const onEndReached = () => {
    const newPage = page + 1;
    setPage(newPage);

    const moreData = Array(6)
      .fill(null)
      .map((_, index) => ({
        ...photoBoothData[0],
        photoBoothID: newPage * 6 + index + 1,
      }));

    setPhotoBoothData(prevData => [...prevData, ...moreData]);
  };

  const renderPhotoBoothItem = useCallback(
    ({item}: {item: MyPhotoBoothFrameType}) => {
      return (
        <MyPhotoBoothFrameContainer>
          <MyPhotoBoothFrame photoBoothData={item} />
        </MyPhotoBoothFrameContainer>
      );
    },
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      const photoBoothTmepData = Array(6)
        .fill(null)
        .map((_, index) => ({
          photoBoothID: index + 1,
          photoBoothName: '포토그레이',
          branch: '연희중앙점',
          representativeImage:
            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
          hashtag: ['레드프레임', '컨셉사진', '레드', '우정사진'],
          myPhotoBooth: true,
        }));

      setPhotoBoothData(photoBoothTmepData);
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <MyPhotoBoothListContainer>
      {!isLoading ? (
        <>
          <FlatList
            data={photoBoothData}
            keyExtractor={item => item.photoBoothID.toString()}
            ref={flatListRef}
            ListHeaderComponent={renderHeader}
            renderItem={renderPhotoBoothItem}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
            ListFooterComponent={SkeletonGetMoreMyPagePhotoBooth}
          />
          <UpScrollButton top="88%" flatListRef={flatListRef} />
        </>
      ) : (
        <SkeletonPhotoBoothContainer>
          <MyPageUserData
            activeComponent={activeComponent}
            updateActiveComponent={updateActiveComponent}
          />
          <SkeletonMyPagePhotoBooth />
        </SkeletonPhotoBoothContainer>
      )}
    </MyPhotoBoothListContainer>
  );
}
