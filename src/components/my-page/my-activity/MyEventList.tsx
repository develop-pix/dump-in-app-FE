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

export default function MyEventList({ activeComponent, updateActiveComponent }: MyPageUserDataProps) {
    // 무한 스크롤 페이지
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [eventData, setEventData] = useState<EventDataType[]>([]);
    const flatListRef = useRef<FlatList>(null);

    const renderHeader = useCallback(() => {
        return <MyPageUserData activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />;
    }, [activeComponent, updateActiveComponent]);

    const onEndReached = () => {
        const newPage = page + 1;
        setPage(newPage);

        const moreData = Array(6)
            .fill(null)
            .map((_, index) => ({
                ...eventData[0],
                eventID: newPage * 6 + index + 1,
            }));

        setEventData(prevData => [...prevData, ...moreData]);
    };

    const renderEventItem = useCallback(({ item }: { item: EventDataType }) => {
        return (
            <PhotoBoothEventFrameContainer>
                <PhotoBoothEventFrame event={item} />
            </PhotoBoothEventFrameContainer>
        );
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const eventTempData = Array(5)
                .fill(null)
                .map((_, index) => ({
                    eventID: index + 1,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    eventTitle: '화사의 ‘I Love My Body’ 프레임',
                    startDate: '2023.09.07',
                    endDate: '2023.10.31',
                    photoBoothName: '포토그레이',
                    myEvent: true,
                }));

            setEventData(eventTempData);
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <MyEventListContainer>
            {!isLoading ? (
                <>
                    <FlatList
                        data={eventData}
                        keyExtractor={item => item.eventID.toString()}
                        ref={flatListRef}
                        ListHeaderComponent={renderHeader}
                        renderItem={renderEventItem}
                        onEndReached={onEndReached}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={SkeletonGetMoreMyPageEvent}
                    />
                    <UpScrollButton top="88%" flatListRef={flatListRef} />
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
