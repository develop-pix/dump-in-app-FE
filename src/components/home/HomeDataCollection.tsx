import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NewNotificationIcon from 'assets/image/icon/alert_notification.svg';
import FilterIcon from 'assets/image/icon/filter.svg';
import NotificationIcon from 'assets/image/icon/notification.svg';
import SearchIcon from 'assets/image/icon/search.svg';
import { UpScrollButton } from 'components/reuse/button/UpScrollButton';
import SkeletonGetMoreHomeData from 'components/reuse/skeleton/SkeletonGetMoreHomeData';
import SkeletonHomeDataCollection from 'components/reuse/skeleton/SkeletonHomeDataCollection';
import { fetchHomeEvent, fetchHomePhotoBooth, fetchHomeReview } from 'hooks/axios/Home';
import { CollectionDataProps } from 'interfaces/Home.interface';
import { HomeStackScreenProps } from 'interfaces/Navigation.interface';
import { FilterProps } from 'interfaces/reuse/Filter.interface';
import { CollectionContainer, CollectionFlatList } from 'styles/layout/home/HomeDataCollection.style';
import {
    HeaderIconContainer,
    HeaderLeftContainer,
    HeaderRightContainer,
    RowContainer,
} from 'styles/layout/reuse/header/Header.style';

import HomeFilterModalForm from './HomeFilterModalForm';
import HomeSelectedFilterOption from './HomeSelectedFilterOption';
import NoResultPhotoBooth from './NoResultPhotoBooth';
import PhotoBoothList from './photo-booth-list/PhotoBoothList';

export default function HomeDataCollection() {
    const navigation = useNavigation<HomeStackScreenProps<'Home'>['navigation']>();

    const flatListRef = useRef<FlatList>(null);

    // 무한 스크롤 페이지
    const page = useRef(0);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const [isFilterVisible, setFilterVisible] = useState(false);
    const [hasNotification, setHasNotification] = useState(false);
    // 필터 변수
    const [filterData, setFilterData] = useState<FilterProps>({
        photoBoothLocation: '',
        frameColor: '',
        participants: 0,
        cameraShot: '',
        concept: [],
    });

    // 위 데이터를 담을 변수
    const [collectionData, setCollectionData] = useState<CollectionDataProps[]>([]);

    const reviewOffset = useRef(0);
    const eventOffset = useRef(0);
    const photoBoothOffset = useRef(0);

    const getHomeData = useCallback(async () => {
        const reviewResponse = await fetchHomeReview(reviewOffset.current, filterData);
        const eventResponse = await fetchHomeEvent(eventOffset.current);
        const photoBoothResponse = await fetchHomePhotoBooth(photoBoothOffset.current);

        if (reviewResponse && eventResponse && photoBoothResponse) {
            if (reviewResponse.data.next) {
                reviewOffset.current += 12;
            } else {
                reviewOffset.current = 0;
            }
            if (eventResponse.data.next) {
                eventOffset.current += 3;
            } else {
                eventOffset.current = 0;
            }
            if (photoBoothResponse.data.next) {
                photoBoothOffset.current += 3;
            } else {
                photoBoothOffset.current = 0;
            }

            setCollectionData(prevData => [
                ...prevData,
                {
                    photoBoothData: photoBoothResponse.data.results,
                    eventData: eventResponse.data.results,
                    reviewData: reviewResponse.data.results,
                },
            ]);

            setRefreshing(false);
            setIsLoading(false);
        }
    }, [filterData]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setIsLoading(true);
        getHomeData();
    }, [getHomeData]);

    /** 필터 존재 여부 확인 변수 */
    const hasFilterOptionData = Object.values(filterData).some(
        value => value && (Array.isArray(value) ? value.length > 0 : true),
    );
    /** 필터 제출 함수 */
    const handleFilterSubmit = (newFilterData: FilterProps) => {
        reviewOffset.current = 0;
        eventOffset.current = 0;
        photoBoothOffset.current = 0;
        setFilterData(newFilterData);
        setCollectionData([]);
        setIsLoading(true);
    };
    /** 필터 모달창 닫는 함수 */
    const handleHideFilterModal = () => {
        setFilterVisible(false);
    };

    const renderReviewItem = useCallback(
        ({ item }: { item: CollectionDataProps }) => {
            return <PhotoBoothList data={item} filterData={filterData} />;
        },
        [filterData],
    );

    useEffect(() => {
        /** 필터 모달창 여는 함수 */
        const handleShowFilterModal = () => {
            setFilterVisible(true);
        };

        const navigateToSearchScreen = () => {
            navigation.navigate('HomeSearch', {
                photoBoothName: null,
            });
        };

        const navigateToNotificationScreen = () => {
            navigation.navigate('Notification');
        };

        navigation.setOptions({
            headerLeft: () => {
                return (
                    <HeaderLeftContainer>
                        <HeaderIconContainer onPress={handleShowFilterModal}>
                            <FilterIcon />
                        </HeaderIconContainer>
                    </HeaderLeftContainer>
                );
            },
            headerRight: () => {
                return (
                    <HeaderRightContainer>
                        <RowContainer>
                            <HeaderIconContainer onPress={navigateToSearchScreen}>
                                <SearchIcon />
                            </HeaderIconContainer>
                            <HeaderIconContainer onPress={navigateToNotificationScreen}>
                                {hasNotification ? <NewNotificationIcon /> : <NotificationIcon />}
                            </HeaderIconContainer>
                        </RowContainer>
                    </HeaderRightContainer>
                );
            },
        });
    }, [hasNotification, navigation]);

    useEffect(() => {
        /** TODO: 알림 유무 확인 로직 추가 */
        const checkNotification = async () => {
            setHasNotification(true);
        };

        checkNotification();
    }, []);

    const onEndReached = () => {
        page.current += 1;
        getHomeData();
    };

    useEffect(() => {
        getHomeData();
    }, [getHomeData]);

    return (
        <CollectionContainer>
            {!isLoading ? (
                <>
                    {hasFilterOptionData && <HomeSelectedFilterOption filterData={filterData} />}
                    {collectionData.length > 0 ? (
                        <>
                            <CollectionFlatList
                                data={collectionData}
                                keyExtractor={(_, index) => `${page}-${index}`}
                                ref={flatListRef}
                                renderItem={renderReviewItem}
                                onEndReached={onEndReached}
                                onEndReachedThreshold={0.1}
                                ListFooterComponent={<SkeletonGetMoreHomeData />}
                                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                            />
                            <UpScrollButton top="88%" flatListRef={flatListRef} />
                        </>
                    ) : (
                        <NoResultPhotoBooth filterData={filterData} />
                    )}
                </>
            ) : (
                <SkeletonHomeDataCollection />
            )}
            <HomeFilterModalForm
                isVisible={isFilterVisible}
                filterData={filterData}
                handleHideFilterModal={handleHideFilterModal}
                onFilterSubmit={handleFilterSubmit}
            />
        </CollectionContainer>
    );
}
