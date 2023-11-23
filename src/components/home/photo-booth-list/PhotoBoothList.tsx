import React from 'react';
import PhotoBoothFrame from './PhotoBoothFrame';
import {PhotoBoothListProps} from '../../../interfaces/Home.interface';
import {
  PhotoBoothListContainer,
  DummyArea,
} from '../../../styles/layout/home/photo-booth-list/PhotoBoothList.style';
import EventFrame from './EventFrame';
import ReviewFrame from './ReviewFrame';

export default function PhotoBoothList({data}: PhotoBoothListProps) {
  const {photoBoothData, eventData, reviewData} = data;

  // 배치 순서에 따라 한 화면에 6개씩 보여줌
  return (
    <PhotoBoothListContainer>
      <PhotoBoothFrame data={photoBoothData[0]} />
      <ReviewFrame data={reviewData[0]} />
      <ReviewFrame data={reviewData[1]} />
      <EventFrame data={eventData[0]} />
      <ReviewFrame data={reviewData[2]} />
      <ReviewFrame data={reviewData[3]} />
    </PhotoBoothListContainer>
  );
}