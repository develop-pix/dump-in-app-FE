import React from 'react';
import LocationImage from '../../assets/image/reuse/location_dark.png';
import ClockImage from '../../assets/image/reuse/clock.png';
import {BranchDescriptionProps} from '../../interfaces/Branch.interface';
import {
  FontLightGreySmallerMedium,
  FontWhiteSmallerSemiboldWithLineSpacing,
} from '../../styles/layout/reuse/text/Text.style';
import {
  BranchDesc,
  BranchDescriptionContainer,
  ClockIcon,
  DescContainer,
  LocationIcon,
} from '../../styles/layout/branch/BranchDescription.style';

export default function BranchDescription({
  address,
  open,
}: BranchDescriptionProps) {
  return (
    <BranchDescriptionContainer>
      <FontWhiteSmallerSemiboldWithLineSpacing>
        INFO
      </FontWhiteSmallerSemiboldWithLineSpacing>
      <BranchDesc>
        <DescContainer>
          <LocationIcon source={LocationImage} />
          <FontLightGreySmallerMedium>{address}</FontLightGreySmallerMedium>
        </DescContainer>
        <DescContainer>
          <ClockIcon source={ClockImage} />
          <FontLightGreySmallerMedium numberOfLines={1}>
            {open}
          </FontLightGreySmallerMedium>
        </DescContainer>
      </BranchDesc>
    </BranchDescriptionContainer>
  );
}
