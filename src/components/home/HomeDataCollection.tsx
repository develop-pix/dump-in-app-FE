import React, {useRef, useState} from 'react';
import {ScrollView, Image} from 'react-native';
import PhotoBoothList from './photo-booth-list/PhotoBoothList';
import HomeMenuBar from './HomeMenuBar';
import HomeSelectedFilterOption from './HomeSelectedFilterOption';
import {
  CollectionContainer,
  CollectionScrollView,
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

export default function HomeDataCollection() {
  // 필터 변수
  const [filterData, setFilterData] = useState<FilterProps>({
    geolocation: '',
    frameColor: '',
    party: 0,
    cameraShot: '',
    concept: [],
  });

  // 포토부스, 이벤트, 리뷰 데이터 임의로 생성
  const [photoBoothData, setPhotoBoothData] = useState<PhotoBoothProps[]>([
    {
      photoBoothID: 1,
      'photobooth-name': '포토랩',
      'representative-image':
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      'my-photobooth': true,
    },
  ]);

  const [eventData, setEventData] = useState<EventProps[]>([
    {
      eventID: 1,
      'representative-image':
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      'new-event': true,
    },
  ]);

  const [reviewData, setReviewData] = useState<ReviewProps[]>([
    {
      reviewID: 1,
      'branch-name': '포토부스 혜화점',
      'representative-image':
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
    {
      reviewID: 2,
      'branch-name': '포토부스 서울대점',
      'representative-image':
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
    {
      reviewID: 3,
      'branch-name': '포토그레이 홍대점',
      'representative-image':
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
    {
      reviewID: 4,
      'branch-name': '인생네컷 홍대점',
      'representative-image':
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
  ]);
  // 위 데이터를 담을 변수
  const [collectionData, setCollectionData] = useState<CollectionDataProps>({
    photoBoothData: photoBoothData,
    eventData: eventData,
    reviewData: reviewData,
  });

  const scrollRef = useRef<ScrollView>(null);
  const handleScrollToTop = () => {
    scrollRef.current?.scrollTo({y: 0, animated: true});
  };

  // 필터 존재 여부 확인 변수
  const hasFilterOptionData = Object.values(filterData).some(
    value => value && (Array.isArray(value) ? value.length > 0 : true),
  );

  // 필터 제출 함수
  const handleFilterSubmit = (newFilterData: FilterProps) => {
    // 필터 데이터 변경
    setFilterData(newFilterData);
    //데이터 변경 후 서버에서 지점 데이터 다시 가져옴

    // 포토부스 데이터 없는 화면 구현을 위해 필터 제출 후 임시로 초기화
    setPhotoBoothData([]);
    setEventData([]);
    setReviewData([]);
    setCollectionData({
      photoBoothData: [],
      eventData: [],
      reviewData: [],
    });
  };

  return (
    <CollectionContainer>
      <HomeMenuBar
        filterData={filterData}
        setFilterData={setFilterData}
        onFilterSubmit={handleFilterSubmit}
      />

      {hasFilterOptionData && (
        <HomeSelectedFilterOption filterData={filterData} />
      )}

      {Object.values(collectionData).some(
        (value: PhotoBoothProps[] | EventProps[] | ReviewProps[]) =>
          value.length > 0,
      ) ? (
        <>
          <CollectionScrollView ref={scrollRef}>
            <PhotoBoothList data={collectionData} />
          </CollectionScrollView>
          <UpScrollImageBox onPress={handleScrollToTop}>
            <Image source={require('../../assets/image/reuse/up-scroll.png')} />
          </UpScrollImageBox>
        </>
      ) : (
        <NoResultPhotoBooth filterData={filterData} />
      )}
    </CollectionContainer>
  );
}
