import React, {useRef} from 'react';
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';
import PhotoBoothList from '../photo-booth-list/PhotoBoothList';
import HomeMenuBar from './HomeMenuBar';
import UpScroll from '../../assets/favicon/up-scroll.png';
import {
  Container,
  CollectionScrollView,
  UpScrollImage,
} from '../../styles/styled-components/home/Collection';

export default function Collection() {
  // 포토부스 지점들 데이터 임의로 생성 (데이터 종류 수정 필요)
  const photoBoothData = [
    {
      'branch-name': '포토부스 혜화점',
      'repersentative-image':
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      description: 'Description 1',
      date: '2023-11-04',
      hashtag: ['# 고데기 있음', '# 생일'],
      'my-branch': false,
      mine: false,
    },
    {
      'branch-name': '돈룩업 서울대점',
      'repersentative-image':
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      description: 'Description 2',
      date: '2023-11-03',
      hashtag: ['#tag3', '#tag4'],
      'my-branch': true,
      mine: true,
    },
    {
      'branch-name': '포토그레이 홍대점',
      'repersentative-image':
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      description: 'Description 3',
      date: '2023-10-27',
      hashtag: ['# 소품 많음', '# 고데기 있음'],
      'my-branch': false,
      mine: false,
    },
    {
      'branch-name': '포토이즘 홍대점',
      'repersentative-image':
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      description: 'Description 3',
      date: '2023-10-27',
      hashtag: ['# 생일', '# 소품 많음'],
      'my-branch': false,
      mine: false,
    },
    {
      'branch-name': '포토이즘 혜화점',
      'repersentative-image':
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      description: 'Description 3',
      date: '2023-10-27',
      hashtag: ['# 3', '# 무릎'],
      'my-branch': true,
      mine: false,
    },
    {
      'branch-name': '포토이즘 홍대점',
      'repersentative-image':
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      description: 'Description 3',
      date: '2023-10-27',
      hashtag: ['# 생일', '# 고데기 있음'],
      'my-branch': false,
      mine: false,
    },
    {
      'branch-name': '포토이즘 홍대점',
      'repersentative-image':
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      description: 'Description 3',
      date: '2023-10-27',
      hashtag: ['# 생일', '# 고데기 있음'],
      'my-branch': false,
      mine: false,
    },
    {
      'branch-name': '포토이즘 홍대점',
      'repersentative-image':
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      description: 'Description 3',
      date: '2023-10-27',
      hashtag: ['# 생일', '# 고데기 있음'],
      'my-branch': false,
      mine: false,
    },
  ];

  const scrollRef = useRef<ScrollView>(null);
  const handleScrollToTop = () => {
    scrollRef.current?.scrollTo({y: 0, animated: true});
  };

  return (
    <Container>
      <HomeMenuBar />
      <CollectionScrollView ref={scrollRef}>
        <PhotoBoothList data={photoBoothData} />
      </CollectionScrollView>
      <UpScrollImage onPress={handleScrollToTop}>
        <Image source={UpScroll} />
      </UpScrollImage>
    </Container>
  );
}
