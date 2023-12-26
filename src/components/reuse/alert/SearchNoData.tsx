import React from 'react';
import {
  NoDataContainer,
  SearchNoDataContainer,
} from '../../../styles/layout/reuse/alert/SearchNoData.style';
import {
  FontLightGreySmallerMedium,
  FontWhiteGreyNormalMedium,
} from '../../../styles/layout/reuse/text/Text.style';
import {SearchNoDataProps} from '../../../interfaces/reuse/text/SearchNoData.interface';
import AlertIcon from '../../../assets/image/icon/alert.svg';

export default function SearchNoData({
  alertText,
  recommendText,
}: SearchNoDataProps) {
  return (
    <SearchNoDataContainer>
      <NoDataContainer>
        <AlertIcon width={24} height={24} />
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
