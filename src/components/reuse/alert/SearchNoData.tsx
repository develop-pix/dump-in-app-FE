import React from 'react';
import {
  AlertImage,
  NoDataContainer,
  SearchNoDataContainer,
} from '../../../styles/layout/reuse/alert/SearchNoData.style';
import {
  FontLightGreySmallerMedium,
  FontWhiteGreyNormalMedium,
} from '../../../styles/layout/reuse/text/Text.style';
import {SearchNoDataProps} from '../../../interfaces/reuse/text/SearchNoData.interface';
import AlertIcon from '../../../assets/image/reuse/alert.png';

export default function SearchNoData({
  alertText,
  recommendText,
}: SearchNoDataProps) {
  return (
    <SearchNoDataContainer>
      <NoDataContainer>
        <AlertImage source={AlertIcon} />
        {alertText ? (
          <FontWhiteGreyNormalMedium>{alertText}</FontWhiteGreyNormalMedium>
        ) : null}
        {recommendText ? (
          <FontLightGreySmallerMedium>
            {recommendText}
          </FontLightGreySmallerMedium>
        ) : null}
      </NoDataContainer>
    </SearchNoDataContainer>
  );
}
