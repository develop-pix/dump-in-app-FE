import React from 'react';
import {
  RecommendSearchContainer,
  RecommendSearchTitle,
  RecommendSearchContentContainer,
  RecommendSearchButton,
  RecommendSearchText,
} from '../../../styles/layout/home-search/input/RecommendSearch.style';
import {HomeSearchProps} from '../../../interfaces/HomeSearch.interface';

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
      <RecommendSearchTitle>추천 검색어</RecommendSearchTitle>

      <RecommendSearchContentContainer>
        {recentSearches.map((search, index) => (
          <RecommendSearchButton
            key={index}
            onPress={() => onRecentListClick(search)}>
            <RecommendSearchText>{search}</RecommendSearchText>
          </RecommendSearchButton>
        ))}
      </RecommendSearchContentContainer>
    </RecommendSearchContainer>
  );
}
