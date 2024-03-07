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
import { CollectionDataProps, EventProps, PhotoBoothProps, ReviewProps } from 'interfaces/Home.interface';
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
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isFilterVisible, setFilterVisible] = useState(false);
    const [hasNotification, setHasNotification] = useState(false);
    // 필터 변수
    const [filterData, setFilterData] = useState<FilterProps>({
        geolocation: '',
        frameColor: '',
        party: 0,
        cameraShot: '',
        concept: [],
    });
    // 포토부스, 이벤트, 리뷰 데이터 12개 임의로 생성
    const [photoBoothData, setPhotoBoothData] = useState<PhotoBoothProps[]>([]);
    const [eventData, setEventData] = useState<EventProps[]>([]);
    const [reviewData, setReviewData] = useState<ReviewProps[]>([]);
    // 위 데이터를 담을 변수
    const [collectionData, setCollectionData] = useState<CollectionDataProps[]>([
        {
            photoBoothData,
            eventData,
            reviewData,
        },
    ]);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setIsLoading(true);
        getHomeData();
    }, []);

    /** 필터 존재 여부 확인 변수 */
    const hasFilterOptionData = Object.values(filterData).some(
        value => value && (Array.isArray(value) ? value.length > 0 : true),
    );
    /** 필터 제출 함수 */
    const handleFilterSubmit = (newFilterData: FilterProps) => {
        // 필터 데이터 변경
        setFilterData(newFilterData);
        // 포토부스 데이터 없는 화면 구현을 위해 필터 제출 후 임시로 초기화
        setCollectionData([]);
    };
    /** 필터 모달창 닫는 함수 */
    const handleHideFilterModal = () => {
        setFilterVisible(false);
    };

    const onEndReached = () => {
        const moreData = {
            photoBoothData: [...collectionData[0].photoBoothData],
            eventData: [...collectionData[0].eventData],
            reviewData: [...collectionData[0].reviewData],
        };
        setPage(prevPage => prevPage + 1);
        setCollectionData(prevData => [...prevData, moreData]);
    };

    const renderReviewItem = useCallback(({ item }: { item: CollectionDataProps }) => {
        return <PhotoBoothList data={item} />;
    }, []);

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

    const getHomeData = async () => {
        const reviewResponse = await fetchHomeReview();
        if (reviewResponse) {
            setReviewData(reviewResponse.data.results);
        }
        const eventResponse = await fetchHomeEvent();
        if (eventResponse) {
            setEventData(eventResponse.data.results);
        }
        const photoBoothResponse = await fetchHomePhotoBooth();
        if (photoBoothResponse) {
            setPhotoBoothData(photoBoothResponse.data.results);
        }

        setRefreshing(false);
        setIsLoading(false);
    };

    useEffect(() => {
        getHomeData();
    }, []);

    useEffect(() => {
        setCollectionData([
            {
                photoBoothData,
                eventData,
                reviewData,
            },
        ]);
    }, [eventData, photoBoothData, reviewData]);

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
                setFilterData={setFilterData}
                handleHideFilterModal={handleHideFilterModal}
                onFilterSubmit={handleFilterSubmit}
            />
        </CollectionContainer>
    );
}
