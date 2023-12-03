import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  RecentSearchContainer,
  RecentSearchContentContainer,
  RecentSearchButton,
  CloseButton,
  CloseButtonIcon,
  EmptySearchMessageContainer,
} from '../../../styles/layout/home-search/input/RecentSearch.style';
import CloseBtnImage from '../../../assets/image/reuse/close-btn-sub.png';
import {HomeSearchProps} from '../../../interfaces/HomeSearch.interface';
import {RecentSearchItemProps} from '../../../interfaces/HomeSearch.interface';
import {
  FontWhiteGreyNormalThin,
  FontWhiteGreySmallerThin,
  FontWhiteGreySmallestThick,
} from '../../../styles/layout/reuse/text/Text.style';

export default function RecentSearch({onRecentListClick}: HomeSearchProps) {
  const [recentSearches, setRecentSearches] = useState<RecentSearchItemProps[]>(
    [],
  );

  useEffect(() => {
    // 사용자 기기의 최근 검색어를 불러옴
    const loadSearches = async () => {
      const loadedSearches = await AsyncStorage.getItem('searches');
      if (loadedSearches !== null) {
        setRecentSearches(JSON.parse(loadedSearches));
      }
    };

    loadSearches();
  }, []);

  // 삭제 버튼 클릭 시 실행
  const onDelete = (index: number) => {
    const newSearches = [...recentSearches];
    newSearches.splice(index, 1);
    setRecentSearches(newSearches);
    AsyncStorage.setItem('searches', JSON.stringify(newSearches));
  };

  return (
    <RecentSearchContainer>
      <FontWhiteGreySmallestThick>최근 검색어</FontWhiteGreySmallestThick>
      <RecentSearchContentContainer>
        {recentSearches.length > 0 ? (
          recentSearches.map(
            (searchItem: RecentSearchItemProps, index: number) => (
              <RecentSearchButton
                key={searchItem.search}
                onPress={() => onRecentListClick(searchItem.search)}>
                <FontWhiteGreySmallerThin>
                  {searchItem.search}
                </FontWhiteGreySmallerThin>
                <CloseButton onPress={() => onDelete(index)}>
                  <CloseButtonIcon source={CloseBtnImage} />
                </CloseButton>
              </RecentSearchButton>
            ),
          )
        ) : (
          <EmptySearchMessageContainer>
            <FontWhiteGreyNormalThin>
              최근 검색어가 없습니다.
            </FontWhiteGreyNormalThin>
          </EmptySearchMessageContainer>
        )}
      </RecentSearchContentContainer>
    </RecentSearchContainer>
  );
}
