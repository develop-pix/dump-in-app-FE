import React from 'react';
import MyPhotoBoothFrame from './MyPhotoBoothFrame';
import {MyPhotoBoothListContainer} from '../../../styles/layout/my-page/MyActivity/MyPhotoBoothList.style';

export default function MyPhotoBoothList() {
  const photoBoothTmepData = Array(7)
    .fill(null)
    .map((_, index) => ({
      photoBoothID: index + 1,
      photoboothName: '포토그레이',
      branch: '연희중앙점',
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      hashtag: ['레드프레임', '컨셉사진', '레드', '우정사진'],
      myPhotoBooth: true,
    }));

  return (
    <MyPhotoBoothListContainer>
      {photoBoothTmepData.map(photoBooth => (
        <MyPhotoBoothFrame
          key={photoBooth.photoBoothID}
          photoBoothData={photoBooth}
        />
      ))}
    </MyPhotoBoothListContainer>
  );
}
