import React from 'react';
import PhotoBoothFrame from './PhotoBoothFrame';
import {PhotoBoothListProps} from '../../interfaces/PhotoBoothList.interface';
import {Container} from '../../styles/styled-components/photo-booth-list/PhotoBoothList';

export default function PhotoBoothList({data}: PhotoBoothListProps) {
  return (
    <Container>
      {data.map((photoBooth, index) => (
        <PhotoBoothFrame key={index} data={photoBooth} />
      ))}
    </Container>
  );
}
