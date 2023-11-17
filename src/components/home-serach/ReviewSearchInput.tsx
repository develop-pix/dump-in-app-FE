import React, {useEffect, useState} from 'react';
import Search from '../reuse/input/Search';
import {
  ReviewSearchContainer,
  ReviewSearchForm,
} from '../../styles/home-search/ReviewSearch.style';
import {ReviewSearchInputProps} from '../../interfaces/HomeSearch.interface';
import {MarginTop} from '../../styles/layout/reuse/Margin.style';
import RecentSearch from './RecentSearch';
import RecommendSearch from './RecommendSearch';

export default function ReviewSearchInput() {
  const [search, setSearch] = useState<string>('');
  const [resultData, setResultData] = useState<ReviewSearchInputProps[] | []>(
    [],
  );

  // 자동 완성 데이터
  const autoCompleteTempData: ReviewSearchInputProps[] = [
    {
      branchID: 1,
      branchName: '인생네컷 동대문 현대아울렛점',
      distance: '300m',
      address: '서울 중구 장충단로13길 20 1층',
    },
    {
      branchID: 2,
      branchName: 'Test1',
      distance: '119.9m',
      address: '서울 용산구 청파로47길 11',
    },
  ];

  const getSearchData = async (searchData: string) => {
    // 나중에 API 연결
    // const result = await getLocationData(search);
    setResultData(
      autoCompleteTempData.filter(data => {
        return data.branchName.indexOf(searchData) === 0;
      }),
    );
  };

  useEffect(() => {
    if (search !== '') {
      getSearchData(search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // 검색 버튼 클릭 시 실행
  const onSearchClick = () => {
    if (search !== '') {
      getSearchData(search); // 검색 실행
      setSearch(''); // 검색창 비우기
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

        <RecentSearch />
        <RecommendSearch />
      </ReviewSearchContainer>
    </ReviewSearchForm>
  );
}
