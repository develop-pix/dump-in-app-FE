import React from 'react';
import PhotoBoothDetailForm from '../components/photobooth-detail/PhotoBoothDetailForm';
import {PhotoBoothDetailContainer} from '../styles/layout/PhotoBoothDetail.style';

export default function PhotoBoothDetail() {
  return (
    <PhotoBoothDetailContainer>
      <PhotoBoothDetailForm />
    </PhotoBoothDetailContainer>
  );
}
