import React from 'react';

import { HomeSearchProps } from '../../../interfaces/HomeSearch.interface';
import {
    RecommendSearchButton,
    RecommendSearchContainer,
    RecommendSearchContentContainer,
} from '../../../styles/layout/home-search/input/RecommendSearch.style';
import { FontWhiteGreySmallestSemibold, FontYellowSmallerMedium } from '../../../styles/layout/reuse/text/Text.style';

export default function RecommendSearch({ onRecentListClick }: HomeSearchProps) {
    const recentSearches: string[] = ['원조네컷', '컨셉사진', '스튜디오', '앵글', '클래식', '이벤트'];

    return (
        <RecommendSearchContainer>
            <FontWhiteGreySmallestSemibold>추천 검색어</FontWhiteGreySmallestSemibold>
            <RecommendSearchContentContainer>
                {recentSearches.map((search, index) => (
                    <RecommendSearchButton key={index} onPress={() => onRecentListClick(search)}>
                        <FontYellowSmallerMedium>{search}</FontYellowSmallerMedium>
                    </RecommendSearchButton>
                ))}
            </RecommendSearchContentContainer>
        </RecommendSearchContainer>
    );
}
