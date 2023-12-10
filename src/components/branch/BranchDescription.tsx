import React from 'react';
import LocationImage from '../../assets/image/reuse/location_dark.png';
import ClockImage from '../../assets/image/reuse/clock.png';
import {BranchDescriptionProps} from '../../interfaces/Branch.interface';
import {
  FontLightGreySmallerThin,
  FontWhiteSmallerThickWithLineSpacing,
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
      <FontWhiteSmallerThickWithLineSpacing>
        INFO
      </FontWhiteSmallerThickWithLineSpacing>
      <BranchDesc>
        <DescContainer>
          <LocationIcon source={LocationImage} />
          <FontLightGreySmallerThin>{address}</FontLightGreySmallerThin>
        </DescContainer>
        <DescContainer>
          <ClockIcon source={ClockImage} />
          <FontLightGreySmallerThin numberOfLines={1}>
            {open}
          </FontLightGreySmallerThin>
        </DescContainer>
      </BranchDesc>
    </BranchDescriptionContainer>
  );
}
