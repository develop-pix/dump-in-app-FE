import React from 'react';
import {
  BranchDesc,
  BranchDescriptionContainer,
  ClockIcon,
  DescContainer,
  DescText,
  LocationIcon,
} from '../../styles/layout/branch/Branch.style';
import LocationImage from '../../assets/image/reuse/location_dark.png';
import ClockImage from '../../assets/image/reuse/clock.png';
import {BranchDescriptionProps} from '../../interfaces/Branch.interface';
import {SubTitleText} from '../../styles/layout/reuse/text/Text.style';

export default function BranchDescription({
  address,
  open,
}: BranchDescriptionProps) {
  return (
    <BranchDescriptionContainer>
      <SubTitleText>INFO</SubTitleText>
      <BranchDesc>
        <DescContainer>
          <LocationIcon source={LocationImage} />
          <DescText>{address}</DescText>
        </DescContainer>
        <DescContainer>
          <ClockIcon source={ClockImage} />
          <DescText>{open}</DescText>
        </DescContainer>
      </BranchDesc>
    </BranchDescriptionContainer>
  );
}
