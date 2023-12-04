import React, {useState} from 'react';

import {useRoute} from '@react-navigation/native';
import {PhotoBoothDetailRouteProp} from '../../interfaces/PhotoBoothDetail.interface';

import {ScrollView} from 'react-native';
import PhotoBoothImageTitle from './PhotoBoothImageTitle';
import PhotoBoothEvent from './PhotoBoothEvent';
import OfficialImages from '../reuse/official-images/OfficialImages';
import PhotoDump from '../reuse/photo-dump/PhotoDump';
import {
  OfficialImagesContainer,
  PhotoDumpContainer,
} from '../../styles/layout/photobooth-detail/PhotoBoothDetail.style';

export default function PhotoBoothDetail() {
  const route = useRoute<PhotoBoothDetailRouteProp>();
  const {PhotoBoothID} = route.params;

  // 임시 데이터, 포토부스 아이디 값의 데이터를 서버에서 가져옴
  const [photoboothData, setPhotoboothData] = useState({
    photoboothName: '포토그레이',
    hashtag: ['레드프레임', '컨셉사진', '레드'],
    representativeImage:
      'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    officialImage: [
      'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    ],
    myPhotobooth: true,
    event: [
      {
        eventID: 1,
        representativeImage:
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        eventTitle: '화사의 ‘I Love My Body’ 프레임',
        startDate: '2023-09-07',
        endDate: '2023-10-31',
        myEvent: true,
      },
      {
        eventID: 2,
        representativeImage:
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        eventTitle: '화사의 ‘I Love My Body’ 프레임',
        startDate: '2023-09-07',
        endDate: '2023-10-31',
        myEvent: false,
      },
      {
        eventID: 3,
        representativeImage:
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        eventTitle: '화사의 ‘I Love My Body’ 프레임',
        startDate: '2023-09-07',
        endDate: '2023-10-31',
        myEvent: true,
      },
      {
        eventID: 4,
        representativeImage:
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        eventTitle: '화사의 ‘I Love My Body’ 프레임',
        startDate: '2023-09-07',
        endDate: '2023-10-31',
        myEvent: false,
      },
    ],
    review: [
      {
        reviewID: 1,
        representativeImage:
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        description:
          '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
        hashtag: ['3', '무릎', '생일', '고데기 있음', '소품 많음'],
      },
      {
        reviewID: 2,
        representativeImage:
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        description:
          '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
        hashtag: ['3', '무릎', '생일', '고데기 있음', '소품 많음'],
      },
    ],
  });

  return (
    <ScrollView>
      <PhotoBoothImageTitle photoboothData={photoboothData} />

      <PhotoBoothEvent eventData={photoboothData.event} />

      <OfficialImagesContainer>
        <OfficialImages />
      </OfficialImagesContainer>

      <PhotoDumpContainer>
        <PhotoDump reviewData={photoboothData.review} />
      </PhotoDumpContainer>
    </ScrollView>
  );
}
