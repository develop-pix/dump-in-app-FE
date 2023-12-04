import React from 'react';
import {
  AlertImage,
  NoDataContainer,
  SearchNoDataContainer,
} from '../../../styles/layout/reuse/alert/SearchNoData.style';
import {
  FontLightGreySmallerThin,
  FontWhiteGreyNormalThin,
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
          <FontWhiteGreyNormalThin>{alertText}</FontWhiteGreyNormalThin>
        ) : null}
        {recommendText ? (
          <FontLightGreySmallerThin>{recommendText}</FontLightGreySmallerThin>
        ) : null}
      </NoDataContainer>
    </SearchNoDataContainer>
  );
}
