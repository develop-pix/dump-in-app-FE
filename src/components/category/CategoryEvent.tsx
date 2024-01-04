import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';

import SearchNoData from 'components/reuse/alert/SearchNoData';
import { UpScrollButton } from 'components/reuse/button/UpScrollButton';
import SkeletonCategoryEvent from 'components/reuse/skeleton/SkeletonCategoryEvent';
import SkeletonGetMoreCategoryEventData from 'components/reuse/skeleton/SkeletonGetMoreCategoryEventData';
import { CategoryEventProps } from 'interfaces/Category.interface';
import { CategoryEventContainer } from 'styles/layout/category/CategoryEvent.style';

import CategoryEventFilter from './CategoryEventFilter';
import CategoryEventItem from './CategoryEventItem';

export default function CategoryEvent() {
    // 무한 스크롤 페이지
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    // 필터 데이터
    const [hashtags, setHashtags] = useState<string[]>([]);
    const flatListRef = useRef<FlatList>(null);

    // 필터 옵션 선택시 호출되는 함수
    const filterOptionSelect = () => {
        // 서버에서 필터 적용한 데이터 가져와야함
        // 임시로 빈 데이터로 초기화
        setEventTempData([]);

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    // 임시 이벤트 데이터
    const [eventTempData, setEventTempData] = useState(() =>
        Array(5)
            .fill(null)
            .map((_, index) => ({
                eventID: index + 1,
                representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                eventTitle: '화사의 ‘I Love My Body’ 프레임',
                startDate: '2023.09.07',
                endDate: '2023.10.31',
                photoBoothName: '포토그레이',
                myEvent: true,
            })),
    );

    const onEndReached = () => {
        const newPage = page + 1;
        setPage(newPage);

        const moreData = Array(5)
            .fill(null)
            .map((_, index) => ({
                ...eventTempData[0],
                eventID: newPage * 5 + index + 1,
            }));

        setEventTempData(prevData => [...prevData, ...moreData]);
    };

    const renderEventItem = useCallback(({ item }: { item: CategoryEventProps }) => {
        return <CategoryEventItem eventData={item} />;
    }, []);

    useEffect(() => {
        // 예시 async ~await로 정상적으로 데이터 fetch완료시 실행
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <CategoryEventContainer>
            <CategoryEventFilter
                hashtags={hashtags}
                setHashtags={setHashtags}
                filterOptionSelect={filterOptionSelect}
            />

            {!isLoading ? (
                <>
                    {eventTempData.length > 0 ? (
                        <>
                            <FlatList
                                data={eventTempData}
                                keyExtractor={item => item.eventID.toString()}
                                ref={flatListRef}
                                renderItem={renderEventItem}
                                onEndReached={onEndReached}
                                onEndReachedThreshold={0.1}
                                ListFooterComponent={SkeletonGetMoreCategoryEventData}
                            />
                            <UpScrollButton top="90%" flatListRef={flatListRef} />
                        </>
                    ) : (
                        <SearchNoData
                            alertText="아직 등록된 이벤트가 없습니다."
                            recommendText="PUSH 알람을 허용하시면
            신규 이벤트 소식을 알려드려요."
                        />
                    )}
                </>
            ) : (
                <SkeletonCategoryEvent />
            )}
        </CategoryEventContainer>
    );
}
