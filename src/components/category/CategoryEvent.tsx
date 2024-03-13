import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';

import SearchNoData from 'components/reuse/alert/SearchNoData';
import { UpScrollButton } from 'components/reuse/button/UpScrollButton';
import SkeletonCategoryEvent from 'components/reuse/skeleton/SkeletonCategoryEvent';
import SkeletonGetMoreCategoryEventData from 'components/reuse/skeleton/SkeletonGetMoreCategoryEventData';
import { GetEventList } from 'hooks/axios/Category';
import { CategoryEventList } from 'interfaces/Category.interface';
import {
    CategoryEventContainer,
    CategoryEventFlatListContainer,
    CategoryEventListContainer,
} from 'styles/layout/category/CategoryEvent.style';

import CategoryEventFilter from './CategoryEventFilter';
import CategoryEventItem from './CategoryEventItem';

export default function CategoryEvent() {
    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hashtags, setHashtags] = useState<string[]>([]);
    const [dataEnd, setDataEnd] = useState<boolean>(true);
    const [eventList, setEventList] = useState<CategoryEventList[]>([]);

    const flatListRef = useRef<FlatList>(null);
    const dataLimit = 4;

    /** filter 선택시 초기화 */
    const filterOptionSelect = () => {
        setPage(1);
        setIsLoading(true);
        setDataEnd(true);
        setEventList([]);
    };

    /** FlatList onEndReached */
    const onEndReached = async () => {
        try {
            const newData = await GetEventList(hashtags, dataLimit, page * dataLimit);
            if (newData.data) {
                setEventList(prevData => [...prevData, ...newData.data.results]);
                newData.data.next === null ? setDataEnd(prev => !prev) : setIsLoading(false);
            }
            setPage(prev => prev + 1);
        } catch (error) {
            console.log('GetEventListError ' + error);
        }
    };

    /** FlatList renderItem */
    const renderEventItem = useCallback(({ item }: { item: CategoryEventList }) => {
        return <CategoryEventItem eventData={item} />;
    }, []);

    //Category EventList 페이지 진입시 리스트 Get
    useEffect(() => {
        setEventList([]);
        const getFirstEventList = async () => {
            try {
                const eventListData = await GetEventList(hashtags, dataLimit, 0);
                if (eventListData.data) {
                    setEventList(eventListData.data.results);
                    setIsLoading(false);
                    eventListData.data.next !== null && setDataEnd(prev => !prev);
                }
            } catch (error) {
                console.log('GetEventListError ' + error);
            }
        };
        getFirstEventList();
    }, [hashtags.length, hashtags]);

    return (
        <CategoryEventContainer>
            <CategoryEventFilter
                hashtags={hashtags}
                setHashtags={setHashtags}
                filterOptionSelect={filterOptionSelect}
            />

            {!isLoading ? (
                <CategoryEventListContainer>
                    {eventList.length > 0 ? (
                        <CategoryEventFlatListContainer>
                            {dataEnd ? (
                                <>
                                    <FlatList
                                        data={eventList}
                                        keyExtractor={item => item.id.toString()}
                                        ref={flatListRef}
                                        renderItem={renderEventItem}
                                        showsVerticalScrollIndicator={false}
                                    />
                                    <UpScrollButton top="90%" flatListRef={flatListRef} />
                                </>
                            ) : (
                                <>
                                    <FlatList
                                        data={eventList}
                                        keyExtractor={item => item.id.toString()}
                                        ref={flatListRef}
                                        renderItem={renderEventItem}
                                        onEndReached={onEndReached}
                                        onEndReachedThreshold={0.1}
                                        ListFooterComponent={SkeletonGetMoreCategoryEventData}
                                        showsVerticalScrollIndicator={false}
                                    />
                                    <UpScrollButton top="90%" flatListRef={flatListRef} />
                                </>
                            )}
                        </CategoryEventFlatListContainer>
                    ) : (
                        <SearchNoData
                            alertText="아직 등록된 이벤트가 없습니다."
                            recommendText="PUSH 알람을 허용하시면
            신규 이벤트 소식을 알려드려요."
                        />
                    )}
                </CategoryEventListContainer>
            ) : (
                <SkeletonCategoryEvent />
            )}
        </CategoryEventContainer>
    );
}
