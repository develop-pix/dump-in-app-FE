import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';

import { ReviewProps } from '../../../interfaces/Home.interface';
import { EventDataProps, RecentSearchItemProps } from '../../../interfaces/HomeSearch.interface';
import {
    ReviewSearchContainer,
    ReviewSearchForm,
    SearchResultAlertContainer,
} from '../../../styles/layout/home-search/input/ReviewSearchInput.style';
import SearchNoData from '../../reuse/alert/SearchNoData';
import Search from '../../reuse/input/Search';
import SearchResult from '../search-result/SearchResult';

import RecentSearch from './RecentSearch';
import RecommendSearch from './RecommendSearch';

export default function ReviewSearchInput() {
    const route = useRoute();
    const currentPhotoBoothName = (route.params as { PhotoBoothName: string | null }).PhotoBoothName;

    const [search, setSearch] = useState<string>('');
    const [showSearchResult, setShowSearchResult] = useState(false);

    // 결과 데이터
    const [eventData, setEventData] = useState<{
        eventData: EventDataProps[];
        finishedEvent: boolean;
    }>({
        eventData: [],
        finishedEvent: true,
    });
    const [photoDumpData, setPhotoDumpData] = useState<ReviewProps[]>([]);

    const getSearchData = async (searchData: string) => {
        // 검색어 상태 업데이트
        setSearch(searchData);

        // 검색어 저장 로직
        const loadedSearches = await AsyncStorage.getItem('searches');
        const newSearches: RecentSearchItemProps[] = loadedSearches !== null ? JSON.parse(loadedSearches) : [];

        const existingSearchIndex = newSearches.findIndex((item: RecentSearchItemProps) => item.search === searchData);
        if (existingSearchIndex > -1) {
            newSearches[existingSearchIndex].order =
                Math.max(...newSearches.map((item: RecentSearchItemProps) => item.order)) + 1;
        } else {
            newSearches.push({
                search: searchData,
                order:
                    newSearches.length > 0
                        ? Math.max(...newSearches.map((item: RecentSearchItemProps) => item.order)) + 1
                        : 1,
            });
        }

        newSearches.sort((a: RecentSearchItemProps, b: RecentSearchItemProps) => b.order - a.order);

        await AsyncStorage.setItem('searches', JSON.stringify(newSearches));

        // 나중에 API 연결
        // 임시 데이터
        const tempEventData: EventDataProps[] = [
            {
                eventID: 1,
                eventName: '포토이즘 X 윌벤져스포토이즘 X 윌벤져스 윌벤져스윌벤져스윌벤져스',
            },
            {
                eventID: 2,
                eventName: '포토그레이의 가을가을 프레임',
            },
            {
                eventID: 3,
                eventName: '원조네컷 x 월벤져스원조네컷 x 원조네컷',
            },
            {
                eventID: 4,
                eventName: '포토이즘 X 세븐틴 컴백 기념 프레임',
            },
        ];
        const tempFinishedEvent = false; // 검색어에 대한 이벤트가 있지만 종료된 경우
        const tempReviewData: ReviewProps[] = [
            {
                reviewID: 1,
                branchName: '포토부스 혜화점',
                representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            },
            {
                reviewID: 2,
                branchName: '포토부스 서울대점',
                representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            },
            {
                reviewID: 3,
                branchName: '포토그레이 홍대점',
                representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            },
            {
                reviewID: 4,
                branchName: '인생네컷 홍대점',
                representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            },
        ];

        setEventData({
            eventData: tempEventData,
            finishedEvent: tempFinishedEvent,
        });
        setPhotoDumpData(tempReviewData);

        // 검색 결과 컴포넌트 보여줌
        setShowSearchResult(true);
    };

    // 검색 버튼 클릭 시 실행
    const onSearchClick = async () => {
        if (search !== '') {
            await getSearchData(search); // 검색 실행
        }
    };

    // PhotoDump에서 포토부스 이름 받아온 경우 바로 검색 실행
    useEffect(() => {
        const autoSearch = async () => {
            if (currentPhotoBoothName !== null) {
                await getSearchData(currentPhotoBoothName);
            }
        };

        autoSearch();
    }, [currentPhotoBoothName]);

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
                    eventData.eventData.length > 0 || photoDumpData.length > 0 ? (
                        <SearchResult searchData={search} eventData={eventData} photoDumpData={photoDumpData} />
                    ) : (
                        <>
                            <SearchResultAlertContainer>
                                <SearchNoData
                                    alertText="검색 결과가 없습니다."
                                    recommendText="아래의 추천 검색어는 어때요?"
                                />
                            </SearchResultAlertContainer>

                            <RecommendSearch onRecentListClick={getSearchData} />
                        </>
                    )
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
