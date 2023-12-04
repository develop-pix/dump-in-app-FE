import React from 'react';
import {
  RecommendSearchContainer,
  RecommendSearchContentContainer,
  RecommendSearchButton,
} from '../../../styles/layout/home-search/input/RecommendSearch.style';
import {HomeSearchProps} from '../../../interfaces/HomeSearch.interface';
import {
  FontYellowSmallerThin,
  FontWhiteGreySmallestThick,
} from '../../../styles/layout/reuse/text/Text.style';

export default function RecommendSearch({onRecentListClick}: HomeSearchProps) {
  const recentSearches: string[] = [
    '원조네컷',
    '컨셉사진',
    '스튜디오',
    '앵글',
    '클래식',
    '이벤트',
  ];

  return (
    <RecommendSearchContainer>
      <FontWhiteGreySmallestThick>추천 검색어</FontWhiteGreySmallestThick>
      <RecommendSearchContentContainer>
        {recentSearches.map((search, index) => (
          <RecommendSearchButton
            key={index}
            onPress={() => onRecentListClick(search)}>
            <FontYellowSmallerThin>{search}</FontYellowSmallerThin>
          </RecommendSearchButton>
        ))}
      </RecommendSearchContentContainer>
    </RecommendSearchContainer>
  );
}
