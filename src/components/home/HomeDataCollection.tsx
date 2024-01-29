import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NewNotificationIcon from 'assets/image/icon/alert_notification.svg';
import FilterIcon from 'assets/image/icon/filter.svg';
import NotificationIcon from 'assets/image/icon/notification.svg';
import SearchIcon from 'assets/image/icon/search.svg';
import { UpScrollButton } from 'components/reuse/button/UpScrollButton';
import SkeletonGetMoreHomeData from 'components/reuse/skeleton/SkeletonGetMoreHomeData';
import SkeletonHomeDataCollection from 'components/reuse/skeleton/SkeletonHomeDataCollection';
import { CollectionDataProps, EventProps, PhotoBoothProps, ReviewProps } from 'interfaces/Home.interface';
import { HomeStackScreenProps } from 'interfaces/Navigation.interface';
import { FilterProps } from 'interfaces/reuse/Filter.interface';
import { CollectionContainer } from 'styles/layout/home/HomeDataCollection.style';
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
    const [photoBoothData, setPhotoBoothData] = useState<PhotoBoothProps[]>([
        {
            photoBoothID: 1,
            photoBoothName: '포토랩',
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
        {
            photoBoothID: 2,
            photoBoothName: '인생네컷',
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
    ]);
    const [eventData, setEventData] = useState<EventProps[]>([
        {
            eventID: 1,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
        {
            eventID: 2,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
    ]);
    const [reviewData, setReviewData] = useState<ReviewProps[]>([
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
        {
            reviewID: 5,
            branchName: '포토부스 혜화점',
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
        {
            reviewID: 6,
            branchName: '포토부스 서울대점',
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
        {
            reviewID: 7,
            branchName: '포토그레이 홍대점',
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
        {
            reviewID: 8,
            branchName: '인생네컷 홍대점',
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
    ]);
    // 위 데이터를 담을 변수
    const [collectionData, setCollectionData] = useState<CollectionDataProps[]>([
        {
            photoBoothData,
            eventData,
            reviewData,
        },
    ]);

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
        // 예시 async ~await로 정상적으로 데이터 fetch완료시 실행
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
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

    return (
        <CollectionContainer>
            {!isLoading ? (
                <>
                    {hasFilterOptionData && <HomeSelectedFilterOption filterData={filterData} />}
                    <>
                        {collectionData.length > 0 ? (
                            <>
                                <FlatList
                                    style={{ paddingTop: 16 }}
                                    data={collectionData}
                                    keyExtractor={(_, index) => `${page}-${index}`}
                                    ref={flatListRef}
                                    renderItem={renderReviewItem}
                                    onEndReached={onEndReached}
                                    onEndReachedThreshold={0.1}
                                    ListFooterComponent={<SkeletonGetMoreHomeData />}
                                />
                                <UpScrollButton top="88%" flatListRef={flatListRef} />
                            </>
                        ) : (
                            <NoResultPhotoBooth filterData={filterData} />
                        )}
                    </>
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
