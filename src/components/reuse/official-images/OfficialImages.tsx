import React from 'react';
import TempImage from '../../../assets/image/dummy/img_official.png';
import {
  OfficialContainer,
  SubTitleContainer,
  OfficialImage,
  OfficialImageWrapper,
  OfficialImagesContainer,
} from '../../../styles/layout/reuse/offcial-images/OfficialImages.style';
import {SubTitleText} from '../../../styles/layout/reuse/text/Text.style';

// props로 이미지 받도록 수정해야함
export default function OfficialImages() {
  return (
    <OfficialContainer>
      <SubTitleContainer>
        <SubTitleText>OFFICIAL</SubTitleText>
      </SubTitleContainer>
      <OfficialImagesContainer>
        <OfficialImageWrapper>
          <OfficialImage source={TempImage} />
        </OfficialImageWrapper>
        <OfficialImageWrapper>
          <OfficialImage source={TempImage} />
        </OfficialImageWrapper>
        <OfficialImageWrapper>
          <OfficialImage source={TempImage} />
        </OfficialImageWrapper>
        <OfficialImageWrapper>
          <OfficialImage source={TempImage} />
        </OfficialImageWrapper>
      </OfficialImagesContainer>
    </OfficialContainer>
  );
}
