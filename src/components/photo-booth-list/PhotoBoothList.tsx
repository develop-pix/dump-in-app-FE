import React from 'react';
import PhotoBoothFrame from './PhotoBoothFrame';
import {PhotoBoothListProps} from '../../interfaces/PhotoBoothList.interface';
import {
  PhotoBoothListContainer,
  DummyArea,
} from '../../styles/layout/photo-booth-list/PhotoBoothList.style';

// 데이터가 홀수이면 정렬을 위해 임시 더미 영영 생성
export default function PhotoBoothList({data}: PhotoBoothListProps) {
  return (
    <PhotoBoothListContainer>
      {data.map((photoBooth, index) => (
        <PhotoBoothFrame key={index} data={photoBooth} />
      ))}
      {data.length % 2 !== 0 && <DummyArea />}
    </PhotoBoothListContainer>
  );
}
