import React from 'react';
import {ReviewSearchEtcProps} from '../../interfaces/HomeSearch.interface';
import {
  ReviewSearchEtcContainer,
  SearchListIcon,
  SearchListInfo,
  SearchListText,
} from '../../styles/home-search/ReviewSearchEtc.style';
import SearchResultIcon from '../../assets/image/reuse/search-result.png';

export default function ReviewSearchEtc({data}: ReviewSearchEtcProps) {
  return (
    <ReviewSearchEtcContainer>
      <SearchListInfo>
        <SearchListIcon source={SearchResultIcon} />
        <SearchListText>{data}</SearchListText>
      </SearchListInfo>
    </ReviewSearchEtcContainer>
  );
}
