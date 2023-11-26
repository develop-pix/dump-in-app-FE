import React from 'react';
import PhotoBoothDetailForm from '../components/photobooth-detail/PhotoBoothDetailForm';
import {PhotoBoothDetailSafeContainer} from '../styles/layout/PhotoBoothDetail.style';

export default function PhotoBoothDetail() {
  return (
    <PhotoBoothDetailSafeContainer>
      <PhotoBoothDetailForm />
    </PhotoBoothDetailSafeContainer>
  );
}
