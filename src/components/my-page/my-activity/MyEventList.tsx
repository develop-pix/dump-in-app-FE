import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';

import MyPageUserData from 'components/my-page/MyPageUserData';
import PhotoBoothEventFrame from 'components/photo-booth-detail/PhotoBoothEventFrame';
import { UpScrollButton } from 'components/reuse/button/UpScrollButton';
import SkeletonGetMoreMyPageEvent from 'components/reuse/skeleton/SkeletonGetMoreMyPageEvent';
import SkeletonMyPageEvent from 'components/reuse/skeleton/SkeletonMyPageEvent';
import { MyPageUserDataProps } from 'interfaces/MyPage.interface';
import { EventDataType } from 'interfaces/PhotoBoothDetail.interface';
import {
    MyEventListContainer,
    PhotoBoothEventFrameContainer,
    SkeletonEventContainer,
} from 'styles/layout/my-page/MyActivity/MyEventList.style';
import { useAppSelector } from 'hooks/redux/store';
import { GetMyEventList } from 'hooks/axios/MyPage';

//TODO: 03_Category/Event/detail API 적용후 정상작동하는지 테스트 필요함
export default function MyEventList({ activeComponent, updateActiveComponent }: MyPageUserDataProps) {
    // 무한 스크롤 페이지
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [eventData, setEventData] = useState<EventDataType[]>([]);
    const [dataEnd, setDataEnd] = useState<boolean>(true);

    const dataLimit = 6;
    const flatListRef = useRef<FlatList>(null);
    const accessToken = useAppSelector(state => state.token).accessToken;

    /** FlatList ListHeaderComponent */
    const renderHeader = useCallback(() => {
        return <MyPageUserData activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />;
    }, [activeComponent, updateActiveComponent]);

    /** FlatList renderItem */
    const renderEventItem = useCallback(({ item }: { item: EventDataType }) => {
        return (
            <PhotoBoothEventFrameContainer>
                <PhotoBoothEventFrame event={item} />
            </PhotoBoothEventFrameContainer>
        );
    }, []);

    /** FlatList onEndReached */
    const onEndReached = async () => {
        setPage(prev => prev + 1);
        const newData = await getMyEvent();

        setEventData(prevData => [...prevData, ...newData.results]);
        setIsLoading(false);
        newData.next !== null && setDataEnd(prev => !prev);
    };

    /** 내가 좋아요 누른 이벤트 항목 데이터 Get */
    const getMyEvent = async () => {
        try {
            if (accessToken) {
                const resultList = await GetMyEventList(accessToken, dataLimit, page);
                return resultList.data;
            }
        } catch (error) {
            console.log('GetMyEventList ' + error);
        }
    };

    // MyEvent 진입시 내가 좋아요 누른 이벤트 항목 데이터 Get
    useEffect(() => {
        const getFirstMyEvent = async () => {
            const eventList = await getMyEvent();
            setEventData(eventList.results);
            setIsLoading(false);

            eventList.next !== null && setDataEnd(prev => !prev);
        };

        getFirstMyEvent();
    }, []);

    return (
        <MyEventListContainer>
            {!isLoading ? (
                <>
                    {dataEnd ? (
                        <>
                            <FlatList
                                contentContainerStyle={{
                                    height: '100%',
                                }}
                                data={eventData}
                                keyExtractor={item => item.id.toString()}
                                ref={flatListRef}
                                ListHeaderComponent={renderHeader}
                                renderItem={renderEventItem}
                            />
                            <UpScrollButton top="88%" flatListRef={flatListRef} />
                        </>
                    ) : (
                        <>
                            <FlatList
                                contentContainerStyle={{
                                    height: '100%',
                                }}
                                data={eventData}
                                keyExtractor={item => item.id.toString()}
                                ref={flatListRef}
                                ListHeaderComponent={renderHeader}
                                renderItem={renderEventItem}
                                onEndReached={onEndReached}
                                onEndReachedThreshold={0.1}
                                ListFooterComponent={SkeletonGetMoreMyPageEvent}
                            />
                            <UpScrollButton top="88%" flatListRef={flatListRef} />
                        </>
                    )}
                </>
            ) : (
                <SkeletonEventContainer>
                    <MyPageUserData activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />
                    <SkeletonMyPageEvent />
                </SkeletonEventContainer>
            )}
        </MyEventListContainer>
    );
}
