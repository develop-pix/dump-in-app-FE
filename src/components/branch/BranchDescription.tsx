import React from 'react';

import ClockIcon from '../../assets/image/icon/clock.svg';
import LocationDarkIcon from '../../assets/image/icon/location_dark.svg';
import { BranchDescriptionProps } from '../../interfaces/Branch.interface';
import {
    BranchDesc,
    BranchDescriptionContainer,
    DescContainer,
} from '../../styles/layout/branch/BranchDescription.style';
import {
    FontLightGreySmallerMedium,
    FontWhiteSmallerSemiboldWithLineSpacing,
} from '../../styles/layout/reuse/text/Text.style';

export default function BranchDescription({ address, open }: BranchDescriptionProps) {
    return (
        <BranchDescriptionContainer>
            <FontWhiteSmallerSemiboldWithLineSpacing>INFO</FontWhiteSmallerSemiboldWithLineSpacing>
            <BranchDesc>
                <DescContainer>
                    <LocationDarkIcon width={16} height={21} />
                    <FontLightGreySmallerMedium>{address}</FontLightGreySmallerMedium>
                </DescContainer>
                <DescContainer>
                    <ClockIcon width={16} height={21} />
                    <FontLightGreySmallerMedium numberOfLines={1}>{open}</FontLightGreySmallerMedium>
                </DescContainer>
            </BranchDesc>
        </BranchDescriptionContainer>
    );
}
