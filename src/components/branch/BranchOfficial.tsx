import React from 'react';
import {
  BranchOfficialContainer,
  OfficialContainer,
  OfficialImage,
  OfficialImageWrapper,
  OfficialImagesContainer,
  SubTitleText,
} from '../../styles/layout/branch/Branch';
import TempImage from '../../assets/image/dummy/img_official.png';

export default function BranchOfficial() {
  return (
    <BranchOfficialContainer>
      <OfficialContainer>
        <SubTitleText>OFFICIAL</SubTitleText>
      </OfficialContainer>
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
    </BranchOfficialContainer>
  );
}
