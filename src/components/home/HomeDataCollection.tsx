import React, {useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import PhotoBoothList from './photo-booth-list/PhotoBoothList';
import HomeMenuBar from './HomeMenuBar';
import HomeSelectedFilterOption from './HomeSelectedFilterOption';
import {
  CollectionContainer,
  UpScrollImageBox,
} from '../../styles/layout/home/HomeDataCollection.style';
import {FilterProps} from '../../interfaces/reuse/Filter.interface';
import NoResultPhotoBooth from './NoResultPhotoBooth';
import {
  CollectionDataProps,
  PhotoBoothProps,
  EventProps,
  ReviewProps,
} from '../../interfaces/Home.interface';
import UpIcon from '../../assets/image/icon/btn_up.svg';
import SkeletonGetMoreHomeData from '../reuse/skeleton/SkeletonGetMoreHomeData';
import SkeletonHomeDataCollection from '../reuse/skeleton/SkeletonHomeDataCollection';

export default function HomeDataCollection() {
  // 필터 변수
  const [filterData, setFilterData] = useState<FilterProps>({
    geolocation: '',
    frameColor: '',
    party: 0,
    cameraShot: '',
    concept: [],
  });

  // 무한 스크롤 페이지
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 포토부스, 이벤트, 리뷰 데이터 12개 임의로 생성
  const [photoBoothData, setPhotoBoothData] = useState<PhotoBoothProps[]>([
    {
      photoBoothID: 1,
      photoboothName: '포토랩',
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
    {
      photoBoothID: 2,
      photoboothName: '인생네컷',
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
  ]);

  const [eventData, setEventData] = useState<EventProps[]>([
    {
      eventID: 1,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
    {
      eventID: 2,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
  ]);

  const [reviewData, setReviewData] = useState<ReviewProps[]>([
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
      branchName: '포토부스 서울대점',
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
    {
      reviewID: 7,
      branchName: '포토그레이 홍대점',
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
    {
      reviewID: 8,
      branchName: '인생네컷 홍대점',
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
  ]);

  // 위 데이터를 담을 변수
  const [collectionData, setCollectionData] = useState<CollectionDataProps[]>([
    {
      photoBoothData: photoBoothData,
      eventData: eventData,
      reviewData: reviewData,
    },
  ]);

  const flatListRef = useRef<FlatList>(null);
  const handleScrollToTop = () => {
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  };

  // 필터 존재 여부 확인 변수
  const hasFilterOptionData = Object.values(filterData).some(
    value => value && (Array.isArray(value) ? value.length > 0 : true),
  );

  // 필터 제출 함수
  const handleFilterSubmit = (newFilterData: FilterProps) => {
    // 필터 데이터 변경
    setFilterData(newFilterData);

    // 포토부스 데이터 없는 화면 구현을 위해 필터 제출 후 임시로 초기화
    setCollectionData([]);
  };

  const onEndReached = () => {
    setPage(prevPage => prevPage + 1);

    const moreData = {
      photoBoothData: [...collectionData[0].photoBoothData],
      eventData: [...collectionData[0].eventData],
      reviewData: [...collectionData[0].reviewData],
    };
    setCollectionData(prevData => [...prevData, moreData]);
  };

  const renderReviewItem = ({item}: {item: CollectionDataProps}) => (
    <PhotoBoothList data={item} />
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
        <CollectionContainer>
          <HomeMenuBar
            filterData={filterData}
            setFilterData={setFilterData}
            onFilterSubmit={handleFilterSubmit}
          />

          {hasFilterOptionData && (
            <HomeSelectedFilterOption filterData={filterData} />
          )}

          {collectionData.length > 0 ? (
            <>
              <FlatList
                data={collectionData}
                keyExtractor={(_, index) => `${page}-${index}`}
                ref={flatListRef}
                renderItem={renderReviewItem}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<SkeletonGetMoreHomeData />}
              />

              <UpScrollImageBox onPress={handleScrollToTop}>
                <UpIcon />
              </UpScrollImageBox>
            </>
          ) : (
            <NoResultPhotoBooth filterData={filterData} />
          )}
        </CollectionContainer>
      ) : (
        <CollectionContainer>
          <HomeMenuBar
            filterData={filterData}
            setFilterData={setFilterData}
            onFilterSubmit={handleFilterSubmit}
          />
          <SkeletonHomeDataCollection />
        </CollectionContainer>
      )}
    </>
  );
}
