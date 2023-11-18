import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  RecentSearchContainer,
  RecentSearchContentContainer,
  RecentSearchTitle,
  RecentSearchButton,
  RecentSearchText,
  CloseButton,
  CloseButtonIcon,
  EmptySearchMessageContainer,
  EmptySearchMessage,
} from '../../../styles/layout/home-search/input/RecentSearch.style';
import CloseBtnImage from '../../../assets/image/reuse/close-btn-sub.png';
import {MarginTop} from '../../../styles/layout/reuse/Margin.style';
import {HomeSearchProps} from '../../../interfaces/HomeSearch.interface';

export default function RecentSearch({onRecentListClick}: HomeSearchProps) {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

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
      <RecentSearchTitle>최근 검색어</RecentSearchTitle>

      <MarginTop />

      <RecentSearchContentContainer>
        {recentSearches.length > 0 ? (
          recentSearches.map((search, index) => (
            <RecentSearchButton
              key={index}
              onPress={() => onRecentListClick(search)}>
              <RecentSearchText>{search}</RecentSearchText>
              <CloseButton onPress={() => onDelete(index)}>
                <CloseButtonIcon source={CloseBtnImage} />
              </CloseButton>
            </RecentSearchButton>
          ))
        ) : (
          <EmptySearchMessageContainer>
            <EmptySearchMessage>최근 검색어가 없습니다.</EmptySearchMessage>
          </EmptySearchMessageContainer>
        )}
      </RecentSearchContentContainer>
    </RecentSearchContainer>
  );
}
