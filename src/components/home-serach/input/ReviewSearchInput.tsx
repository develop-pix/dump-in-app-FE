import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Search from '../../reuse/input/Search';
import {
  ReviewSearchContainer,
  ReviewSearchForm,
} from '../../../styles/layout/home-search/input/ReviewSearchInput.style';
import RecentSearch from './RecentSearch';
import RecommendSearch from './RecommendSearch';
import {EventDataProps} from '../../../interfaces/HomeSearch.interface';
import {CollectionProps} from '../../../interfaces/PhotoBoothList.interface';
import SearchResult from '../search-result/SearchResult';
import {RecentSearchItemProps} from '../../../interfaces/HomeSearch.interface';

export default function ReviewSearchInput() {
  const [search, setSearch] = useState<string>('');
  const [showSearchResult, setShowSearchResult] = useState(false);

  // 결과 데이터
  const [eventData, setEventData] = useState<EventDataProps[]>([]);
  const [photoDumpData, setPhotoDumpData] = useState<CollectionProps[]>([]);

  const getSearchData = async (searchData: string) => {
    // 검색어 상태 업데이트
    setSearch(searchData);

    // 나중에 API 연결
    // 임시 데이터
    const tempEventData: EventDataProps[] = [
      {
        eventID: 1,
        eventName: '포토이즘 X 윌벤져스포토이즘 X 윌벤져스 ...',
      },
      {
        eventID: 2,
        eventName: '포토이즘의 가을가을 프레임',
      },
      {
        eventID: 3,
        eventName: '포토이즘 X 세븐틴 컴백 기념 프레임',
      },
      {
        eventID: 4,
        eventName: 'test 하이라이트 테스트',
      },
    ];
    const tempPhotoDumpData: CollectionProps[] = [
      {
        'branch-name': '포토이즘 홍대점',
        'repersentative-image':
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        description: 'Description 1',
        date: '2023-11-04',
        hashtag: ['# 고데기 있음', '# 생일'],
        'my-branch': false,
        mine: false,
      },
      {
        'branch-name': '돈룩업 서울대점',
        'repersentative-image':
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        description: 'Description 2',
        date: '2023-11-03',
        hashtag: ['#tag3', '#tag4'],
        'my-branch': false,
        mine: false,
      },
      {
        'branch-name': '포토이즘 홍대점',
        'repersentative-image':
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        description: 'Description 1',
        date: '2023-11-04',
        hashtag: ['# 고데기 있음', '# 생일'],
        'my-branch': false,
        mine: false,
      },
      {
        'branch-name': '돈룩업 서울대점',
        'repersentative-image':
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        description: 'Description 2',
        date: '2023-11-03',
        hashtag: ['#tag3', '#tag4'],
        'my-branch': false,
        mine: false,
      },
    ];

    setEventData(tempEventData);
    setPhotoDumpData(tempPhotoDumpData);

    // 검색 결과 컴포넌트 보여줌
    setShowSearchResult(true);
  };

  // 검색 버튼 클릭 시 실행
  const onSearchClick = async () => {
    if (search !== '') {
      await getSearchData(search); // 검색 실행

      // 기존에 저장된 검색어
      let loadedSearches = await AsyncStorage.getItem('searches');
      let newSearches: RecentSearchItemProps[] =
        loadedSearches !== null ? JSON.parse(loadedSearches) : [];

      // 최신 검색어 중복 방지
      const existingSearchIndex = newSearches.findIndex(
        (item: RecentSearchItemProps) => item.search === search,
      );
      if (existingSearchIndex > -1) {
        // 저장되어있는 검색어를 다시 검색하면 order를 최댓값으로 설정
        newSearches[existingSearchIndex].order =
          Math.max(
            ...newSearches.map((item: RecentSearchItemProps) => item.order),
          ) + 1;
      } else {
        // 검색어 추가
        newSearches.push({
          search,
          order:
            newSearches.length > 0
              ? Math.max(
                  ...newSearches.map(
                    (item: RecentSearchItemProps) => item.order,
                  ),
                ) + 1
              : 1,
        });
      }

      // 최근 입력 순으로 정렬
      newSearches.sort(
        (a: RecentSearchItemProps, b: RecentSearchItemProps) =>
          b.order - a.order,
      );

      await AsyncStorage.setItem('searches', JSON.stringify(newSearches)); // 검색어 저장
    }
  };

  return (
    <ReviewSearchForm>
      <ReviewSearchContainer>
        <Search
          placeholder="지역, 포토부스, 키워드로 검색"
          search={search}
          setSearch={setSearch}
          SubmitSearch={onSearchClick}
        />

        {showSearchResult ? (
          <SearchResult
            searchData={search} // 검색어 부분과 일치하면 흰 글씨로 표시하기 위해 넘겨줌
            eventData={eventData}
            photoDumpData={photoDumpData}
          />
        ) : (
          <>
            <RecentSearch onRecentListClick={getSearchData} />
            <RecommendSearch onRecentListClick={getSearchData} />
          </>
        )}
      </ReviewSearchContainer>
    </ReviewSearchForm>
  );
}
