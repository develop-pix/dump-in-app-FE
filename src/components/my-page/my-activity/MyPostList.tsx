import React, {useState, useEffect, useRef} from 'react';
import {ReviewProps} from '../../../interfaces/Home.interface';
import {
  MyPostListContainer,
  SkeletonMyPostContainer,
} from '../../../styles/layout/my-page/MyActivity/MyPostList.style';
import MyPostFrame from './MyPostFrame';
import SkeletonMyPageReview from '../../reuse/skeleton/SkeletonMyPageReview';
import SkeletonGetMoreMyPageReview from '../../reuse/skeleton/SkeletonGetMoreMyPageReview';
import {View, FlatList} from 'react-native';
import {MyPageUserDataProps} from '../../../interfaces/MyPage.interface';
import MyPageUserData from '../MyPageUserData';
import {UpScrollButton} from '../../reuse/button/UpScrollButton';

export default function MyPostList({
  activeComponent,
  updateActiveComponent,
}: MyPageUserDataProps) {
  // 무한 스크롤 페이지
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [reviewData, setReviewData] = useState<ReviewProps[]>([]);
  const flatListRef = useRef<FlatList>(null);

  const renderHeader = () => {
    return (
      <MyPageUserData
        activeComponent={activeComponent}
        updateActiveComponent={updateActiveComponent}
      />
    );
  };

  const onEndReached = () => {
    const newPage = page + 1;
    setPage(newPage);

    const moreData = Array(6)
      .fill(null)
      .map((_, index) => ({
        ...reviewData[0],
        reviewID: newPage * 6 + index + 1,
      }));

    setReviewData(prevData => [...prevData, ...moreData]);
  };

  const renderReviewItem = ({item}: {item: ReviewProps}) => (
    <MyPostFrame data={item} />
  );

  useEffect(() => {
    setTimeout(() => {
      setReviewData([
        {
          reviewID: 1,
          branchName: '포토부스 혜화점',
          representativeImage:
            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
        {
          reviewID: 2,
          branchName: '포토부스 서울대점',
          representativeImage:
            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
        {
          reviewID: 3,
          branchName: '포토그레이 홍대점',
          representativeImage:
            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
        {
          reviewID: 4,
          branchName: '인생네컷 홍대점',
          representativeImage:
            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
        {
          reviewID: 5,
          branchName: '포토부스 혜화점',
          representativeImage:
            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
        {
          reviewID: 6,
          branchName: '포토부스 혜화점',
          representativeImage:
            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
      ]);
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <MyPostListContainer>
      {!isLoading ? (
        <>
          <FlatList
            data={reviewData}
            keyExtractor={item => item.reviewID.toString()}
            ref={flatListRef}
            ListHeaderComponent={renderHeader}
            renderItem={renderReviewItem}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-evenly'}}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
            ListFooterComponent={SkeletonGetMoreMyPageReview}
          />
          <UpScrollButton top="88%" flatListRef={flatListRef} />
        </>
      ) : (
        <SkeletonMyPostContainer>
          <MyPageUserData
            activeComponent={activeComponent}
            updateActiveComponent={updateActiveComponent}
          />
          <SkeletonMyPageReview />
        </SkeletonMyPostContainer>
      )}
    </MyPostListContainer>
  );
}
