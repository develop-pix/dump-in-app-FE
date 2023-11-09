import React from 'react';
import PhotoBoothFrame from './PhotoBoothFrame';
import {PhotoBoothListProps} from '../../interfaces/PhotoBoothList.interface';
import {PhotoBoothListContainer} from '../../styles/layout/photo-booth-list/PhotoBoothList';

export default function PhotoBoothList({data}: PhotoBoothListProps) {
  return (
    <PhotoBoothListContainer>
      {data.map((photoBooth, index) => (
        <PhotoBoothFrame key={index} data={photoBooth} />
      ))}
    </PhotoBoothListContainer>
  );
}
