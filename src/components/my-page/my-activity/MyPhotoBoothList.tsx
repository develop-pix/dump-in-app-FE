import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SearchNoData from 'components/reuse/alert/SearchNoData';
import { NormalButton } from 'components/reuse/button/NormalButton';
import { UpScrollButton } from 'components/reuse/button/UpScrollButton';
import SkeletonGetMoreMyPagePhotoBooth from 'components/reuse/skeleton/SkeletonGetMoreMyPagePhotoBooth';
import SkeletonMyPagePhotoBooth from 'components/reuse/skeleton/SkeletonMyPagePhotoBooth';
import { GetMyPhotoBoothList } from 'hooks/axios/MyPage';
import { storage } from 'hooks/mmkv/storage';
import { useAppSelector } from 'hooks/redux/store';
import { MyPhotoBoothFrameType } from 'interfaces/MyPage.interface';
import { MainTabScreenProps } from 'interfaces/Navigation.interface';
import {
    MyPhotoBoothContainer,
    MyPhotoBoothFlatListContainer,
    MyPhotoBoothFrameContainer,
    MyPhotoBoothListContainer,
    SkeletonPhotoBoothContainer,
} from 'styles/layout/my-page/MyActivity/MyPhotoBoothList.style';
import { FlatListButtonContainer } from 'styles/layout/reuse/button/NormalButton.style';

import MyPhotoBoothFrame from './MyPhotoBoothFrame';

export default function MyPhotoBoothList() {
    // 무한 스크롤 페이지
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [photoBoothData, setPhotoBoothData] = useState<MyPhotoBoothFrameType[]>([]);
    const [dataEnd, setDataEnd] = useState<boolean>(true);

    const dataLimit = 8;
    const flatListRef = useRef<FlatList>(null);
    const accessToken = storage.getString('token.accessToken');
    const isLoggedIn = useAppSelector(state => state.userData).isLoggedIn;
    const navigation = useNavigation<MainTabScreenProps<'HomeTab'>['navigation']>();

    /** FlatList renderItem */
    const renderPhotoBoothItem = useCallback(({ item }: { item: MyPhotoBoothFrameType }) => {
        return (
            <MyPhotoBoothFrameContainer>
                <MyPhotoBoothFrame photoBoothData={item} />
            </MyPhotoBoothFrameContainer>
        );
    }, []);

    /** FlatList onEndReached */
    const onEndReached = async () => {
        setPage(prev => prev + 1);
        const newData = await getMyPhotoBooth();

        setPhotoBoothData(prevData => [...prevData, ...newData.results]);
        setIsLoading(false);
        newData.next !== null && setDataEnd(prev => !prev);
    };

    /** FlatList listFooterItem */
    const renderFooterItem = useCallback(() => {
        const onPressFooter = () => {
            navigation.navigate('MainTab', {
                screen: 'LocationTab',
                params: {
                    screen: 'Location',
                },
            });
        };

        return (
            <FlatListButtonContainer>
                <NormalButton text="내 주변 포토부스 보러가기" onPress={onPressFooter} />
            </FlatListButtonContainer>
        );
    }, [navigation]);

    /** 내가 좋아요 누른 지점 항목 데이터 Get */
    const getMyPhotoBooth = async () => {
        try {
            if (accessToken && isLoggedIn) {
                const resultList = await GetMyPhotoBoothList(accessToken, dataLimit, page);
                return resultList.data;
            }
        } catch (error) {
            console.log('GetMyPhotoBoothList ' + error);
        }
    };

    // MyPhotoBooth 진입시 내가 좋아요 누른 지점 항목 데이터 Get
    useEffect(() => {
        const getFirstMyPhotoBooth = async () => {
            const photoBoothList = await getMyPhotoBooth();
            setPhotoBoothData(photoBoothList.results);
            setIsLoading(false);

            photoBoothList.next !== null && setDataEnd(prev => !prev);
        };

        getFirstMyPhotoBooth();
    }, []);

    return (
        <MyPhotoBoothListContainer>
            {!isLoading ? (
                <MyPhotoBoothContainer>
                    {dataEnd ? (
                        photoBoothData.length > 0 ? (
                            <MyPhotoBoothFlatListContainer>
                                <FlatList
                                    data={photoBoothData}
                                    keyExtractor={item => item.id}
                                    ref={flatListRef}
                                    renderItem={renderPhotoBoothItem}
                                    ListFooterComponent={renderFooterItem}
                                />
                                <UpScrollButton top="88%" flatListRef={flatListRef} />
                            </MyPhotoBoothFlatListContainer>
                        ) : (
                            <MyPhotoBoothFlatListContainer>
                                <SearchNoData
                                    alertText="즐겨찾는 지점이 없습니다."
                                    recommendText="다양한 포토부스를 구경해 보세요!"
                                />
                                <FlatList
                                    data={photoBoothData}
                                    keyExtractor={item => item.id}
                                    ref={flatListRef}
                                    renderItem={renderPhotoBoothItem}
                                    scrollEnabled={false}
                                    ListFooterComponent={renderFooterItem}
                                />
                                <UpScrollButton top="88%" flatListRef={flatListRef} />
                            </MyPhotoBoothFlatListContainer>
                        )
                    ) : (
                        <MyPhotoBoothFlatListContainer>
                            <FlatList
                                data={photoBoothData}
                                keyExtractor={item => item.id}
                                ref={flatListRef}
                                renderItem={renderPhotoBoothItem}
                                onEndReached={onEndReached}
                                onEndReachedThreshold={0.1}
                                ListFooterComponent={SkeletonGetMoreMyPagePhotoBooth}
                            />
                            <UpScrollButton top="88%" flatListRef={flatListRef} />
                        </MyPhotoBoothFlatListContainer>
                    )}
                </MyPhotoBoothContainer>
            ) : (
                <SkeletonPhotoBoothContainer>
                    <SkeletonMyPagePhotoBooth />
                </SkeletonPhotoBoothContainer>
            )}
        </MyPhotoBoothListContainer>
    );
}
