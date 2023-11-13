import React from 'react';
import {
  BranchDesc,
  BranchDescriptionContainer,
  ClockIcon,
  DescContainer,
  DescText,
  LocationIcon,
  SubTitleText,
} from '../../styles/layout/branch/Branch';
import LocationImage from '../../assets/image/reuse/location_dark.png';
import ClockImage from '../../assets/image/reuse/clock.png';

export default function BranchDescription() {
  return (
    <BranchDescriptionContainer>
      <SubTitleText>INFO</SubTitleText>
      <BranchDesc>
        <DescContainer>
          <LocationIcon source={LocationImage} />
          <DescText>
            서울 마포구 양화로 18길 15 1층 (동교동)321 321 312 32132312312
          </DescText>
        </DescContainer>
        <DescContainer>
          <ClockIcon source={ClockImage} />
          <DescText> 24시간 영업</DescText>
        </DescContainer>
      </BranchDesc>
    </BranchDescriptionContainer>
  );
}
