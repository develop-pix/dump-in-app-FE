import React from 'react';
import PhotoBoothFrame from './PhotoBoothFrame';
import {PhotoBoothListProps} from '../../../interfaces/Home.interface';
import {PhotoBoothListContainer} from '../../../styles/layout/home/photo-booth-list/PhotoBoothList.style';
import EventFrame from './EventFrame';
import ReviewFrame from './ReviewFrame';
import {
  PhotoBoothProps,
  EventProps,
  ReviewProps,
} from '../../../interfaces/Home.interface';

export default function PhotoBoothList({data}: PhotoBoothListProps) {
  const {photoBoothData, eventData, reviewData} = data;

  const allData: (PhotoBoothProps | EventProps | ReviewProps)[] = [];
  for (let i = 0; i < photoBoothData.length; i++) {
    allData.push(photoBoothData[i]);
    allData.push(...reviewData.slice(i * 4, i * 4 + 2));
    allData.push(eventData[i]);
    allData.push(...reviewData.slice(i * 4 + 2, i * 4 + 4));
  }

  return (
    <PhotoBoothListContainer>
      {allData.map((item, index) => {
        if ('photoBoothID' in item) {
          return <PhotoBoothFrame key={index} data={item as PhotoBoothProps} />;
        } else if ('eventID' in item) {
          return <EventFrame key={index} data={item as EventProps} />;
        } else if ('reviewID' in item) {
          return <ReviewFrame key={index} data={item as ReviewProps} />;
        }
      })}
    </PhotoBoothListContainer>
  );
}
