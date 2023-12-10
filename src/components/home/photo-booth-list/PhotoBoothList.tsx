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

  const allData = [...photoBoothData, ...eventData, ...reviewData] as (
    | PhotoBoothProps
    | EventProps
    | ReviewProps
  )[];

  return (
    <PhotoBoothListContainer>
      {allData.slice(0, 6).map((item, index) => {
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
