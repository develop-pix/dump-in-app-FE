import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PhotoBoothEventFrame from 'components/photo-booth-detail/PhotoBoothEventFrame';
import SearchNoData from 'components/reuse/alert/SearchNoData';
import { NormalButton } from 'components/reuse/button/NormalButton';
import { UpScrollButton } from 'components/reuse/button/UpScrollButton';
import SkeletonGetMoreMyPageEvent from 'components/reuse/skeleton/SkeletonGetMoreMyPageEvent';
import SkeletonMyPageEvent from 'components/reuse/skeleton/SkeletonMyPageEvent';
import { GetMyEventList } from 'hooks/axios/MyPage';
import { useAppSelector } from 'hooks/redux/store';
import { MainTabScreenProps } from 'interfaces/Navigation.interface';
import { EventDataType } from 'interfaces/PhotoBoothDetail.interface';
import {
    MyEventContainer,
    MyEventFlatListContainer,
    MyEventListContainer,
    PhotoBoothEventFrameContainer,
    SkeletonEventContainer,
} from 'styles/layout/my-page/MyActivity/MyEventList.style';
import { FlatListButtonContainer } from 'styles/layout/reuse/button/NormalButton.style';

export default function MyEventList() {
    // 무한 스크롤 페이지
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [eventData, setEventData] = useState<EventDataType[]>([]);
    const [dataEnd, setDataEnd] = useState(true);
    const [scrollOffsetY, setScrollOffsetY] = useState(0);

    const dataLimit = 6;
    const flatListRef = useRef<FlatList>(null);
    const navigation = useNavigation<MainTabScreenProps<'HomeTab'>['navigation']>();
    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;

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

    /** FlatList listFooterItem */
    const renderFooterItem = useCallback(() => {
        const onPressFooter = () => {
            navigation.navigate('MainTab', {
                screen: 'CategoryTab',
                params: {
                    screen: 'Category',
                },
            });
        };

        return (
            <FlatListButtonContainer>
                <NormalButton text="이벤트 보러가기" onPress={onPressFooter} />
            </FlatListButtonContainer>
        );
    }, [navigation]);

    /** 내가 좋아요 누른 이벤트 항목 데이터 Get */
    const getMyEvent = async () => {
        try {
            if (isLoggedIn) {
                const resultList = await GetMyEventList(dataLimit, page);
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
                <MyEventContainer>
                    {dataEnd ? (
                        eventData.length > 0 ? (
                            <MyEventFlatListContainer>
                                <FlatList
                                    data={eventData}
                                    keyExtractor={item => item.id.toString()}
                                    ref={flatListRef}
                                    renderItem={renderEventItem}
                                    ListFooterComponent={renderFooterItem}
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={{
                                        paddingVertical: 16,
                                    }}
                                    onMomentumScrollEnd={event => {
                                        setScrollOffsetY(event.nativeEvent.contentOffset.y);
                                    }}
                                />
                                {scrollOffsetY > 0 && <UpScrollButton flatListRef={flatListRef} />}
                            </MyEventFlatListContainer>
                        ) : (
                            <MyEventFlatListContainer>
                                <SearchNoData
                                    alertText="즐겨찾는 이벤트가 없습니다."
                                    recommendText="진행중인 이벤트를 구경해 보세요!"
                                />
                                {renderFooterItem()}
                            </MyEventFlatListContainer>
                        )
                    ) : (
                        <MyEventFlatListContainer>
                            <FlatList
                                data={eventData}
                                keyExtractor={item => item.id.toString()}
                                ref={flatListRef}
                                renderItem={renderEventItem}
                                onEndReached={onEndReached}
                                onEndReachedThreshold={0.1}
                                ListFooterComponent={SkeletonGetMoreMyPageEvent}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{
                                    paddingVertical: 16,
                                }}
                            />
                            <UpScrollButton flatListRef={flatListRef} />
                        </MyEventFlatListContainer>
                    )}
                </MyEventContainer>
            ) : (
                <SkeletonEventContainer>
                    <SkeletonMyPageEvent />
                </SkeletonEventContainer>
            )}
        </MyEventListContainer>
    );
}
