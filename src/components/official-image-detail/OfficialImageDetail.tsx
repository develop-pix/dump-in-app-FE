import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {OfficialImageDetailParamList} from '../../interfaces/NavigationBar';
import {
  OfficialImageDetailContainer,
  OfficialImageDetailForm,
  OfficialImageDetailFormContainer,
  OfficialImageDetailImage,
  TitleContainer,
} from '../../styles/layout/official-image-detail/OfficialImageDetail.style';
import OfficialImageDetailHeader from '../reuse/header/OfficialImageDetailHeader';

export default function OfficialImageDetail() {
  const route =
    useRoute<RouteProp<OfficialImageDetailParamList, 'imageData'>>();
  return (
    <OfficialImageDetailFormContainer>
      <TitleContainer>
        <OfficialImageDetailHeader
          photoboothName={route.params.photoBoothName}
          branchName={route.params.branchName}
        />
      </TitleContainer>
      <OfficialImageDetailForm>
        <OfficialImageDetailContainer>
          <OfficialImageDetailImage source={{uri: route.params.image}} />
        </OfficialImageDetailContainer>
      </OfficialImageDetailForm>
    </OfficialImageDetailFormContainer>
  );
}
