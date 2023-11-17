import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Search from '../reuse/input/Search';
import {
  ReviewSearchContainer,
  ReviewSearchForm,
} from '../../styles/home-search/ReviewSearch.style';
import {MarginTop} from '../../styles/layout/reuse/Margin.style';
import RecentSearch from './RecentSearch';
import RecommendSearch from './RecommendSearch';
import ReviewSearchEtc from './ReviewSearchEtc';

export default function ReviewSearchInput() {
  const [search, setSearch] = useState<string>('');
  const [resultData, setResultData] = useState<string[]>([]);

  // 자동 완성 데이터
  const autoCompleteTempData: string[] = [
    'testtesttesttesttesttesttesttest',
    'testtesttesttesttesttesttesttest',
    '포토이즘 X 윌벤져스포토이즘 X 윌벤져스 ...',
  ];

  const getSearchData = async (searchData: string) => {
    // searchData를 검색 결과 페이지로 넘겨주고 이동

    // 나중에 API 연결
    // const result = await getLocationData(search);
    setResultData(
      autoCompleteTempData.filter(data => data.indexOf(searchData) === 0),
    );
  };

  useEffect(() => {
    if (search !== '') {
      getSearchData(search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  // 검색 버튼 클릭 시 실행
  const onSearchClick = async () => {
    if (search !== '') {
      await getSearchData(search); // 검색 실행

      // 기존에 저장된 검색어
      const loadedSearches = await AsyncStorage.getItem('searches');
      let newSearches =
        loadedSearches !== null ? JSON.parse(loadedSearches) : [];

      // 최신 검색어 중복 방지
      if (!newSearches.includes(search)) {
        // 기존 검색어에 새 검색어 추가
        newSearches = [search, ...newSearches];

        setRecentSearches(newSearches); // 검색어를 상태에 저장
        await AsyncStorage.setItem('searches', JSON.stringify(newSearches)); // 검색어를 로컬 스토리지에 저장
      }
    }
  };

  return (
    <ReviewSearchForm>
      <MarginTop />

      <ReviewSearchContainer>
        <Search
          placeholder="지역, 포토부스, 키워드로 검색"
          setSearch={setSearch}
          onSearchClick={onSearchClick}
        />

        {resultData.map((item, index) => (
          <ReviewSearchEtc key={index} data={item} />
        ))}

        <RecentSearch onRecentListClick={getSearchData} />

        <MarginTop />

        <RecommendSearch onRecentListClick={getSearchData} />
      </ReviewSearchContainer>
    </ReviewSearchForm>
  );
}
