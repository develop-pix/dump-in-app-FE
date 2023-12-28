import React from 'react';
import {OfficialDetailContainer} from '../styles/layout/official-image-detail/OfficialImageDetail.style';
import OfficialImageDetailForm from '../components/official-image-detail/OfficialImageDetailForm';

export default function OfficialImageDetail() {
  return (
    <OfficialDetailContainer>
      <OfficialImageDetailForm />
    </OfficialDetailContainer>
  );
}
