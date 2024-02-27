import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';

import MyPageUserData from 'components/my-page/MyPageUserData';
import { UpScrollButton } from 'components/reuse/button/UpScrollButton';
import SkeletonGetMoreMyPagePhotoBooth from 'components/reuse/skeleton/SkeletonGetMoreMyPagePhotoBooth';
import SkeletonMyPagePhotoBooth from 'components/reuse/skeleton/SkeletonMyPagePhotoBooth';
import { MyPageUserDataProps, MyPhotoBoothFrameType } from 'interfaces/MyPage.interface';
import {
    MyPhotoBoothFrameContainer,
    MyPhotoBoothListContainer,
    SkeletonPhotoBoothContainer,
} from 'styles/layout/my-page/MyActivity/MyPhotoBoothList.style';

import MyPhotoBoothFrame from './MyPhotoBoothFrame';
import { useAppSelector } from 'hooks/redux/store';
import { GetMyPhotoBoothList } from 'hooks/axios/MyPage';

export default function MyPhotoBoothList({ activeComponent, updateActiveComponent }: MyPageUserDataProps) {
    // 무한 스크롤 페이지
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [photoBoothData, setPhotoBoothData] = useState<MyPhotoBoothFrameType[]>([]);
    const [dataEnd, setDataEnd] = useState<boolean>(true);

    const dataLimit = 8;
    const flatListRef = useRef<FlatList>(null);
    const accessToken = useAppSelector(state => state.token).accessToken;

    /** FlatList ListHeaderComponent */
    const renderHeader = useCallback(() => {
        return <MyPageUserData activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />;
    }, [activeComponent, updateActiveComponent]);

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

    /** 내가 좋아요 누른 지점 항목 데이터 Get */
    const getMyPhotoBooth = async () => {
        try {
            if (accessToken) {
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
            console.log(photoBoothList);
            setPhotoBoothData(photoBoothList.results);
            setIsLoading(false);

            photoBoothList.next !== null && setDataEnd(prev => !prev);
        };

        getFirstMyPhotoBooth();
    }, []);

    return (
        <MyPhotoBoothListContainer>
            {!isLoading ? (
                <>
                    {dataEnd ? (
                        <>
                            <FlatList
                                contentContainerStyle={{
                                    height: '100%',
                                }}
                                data={photoBoothData}
                                keyExtractor={item => item.id}
                                ref={flatListRef}
                                ListHeaderComponent={renderHeader}
                                renderItem={renderPhotoBoothItem}
                            />
                            <UpScrollButton top="88%" flatListRef={flatListRef} />
                        </>
                    ) : (
                        <>
                            <FlatList
                                contentContainerStyle={{
                                    height: '100%',
                                }}
                                data={photoBoothData}
                                keyExtractor={item => item.id}
                                ref={flatListRef}
                                ListHeaderComponent={renderHeader}
                                renderItem={renderPhotoBoothItem}
                                onEndReached={onEndReached}
                                onEndReachedThreshold={0.1}
                                ListFooterComponent={SkeletonGetMoreMyPagePhotoBooth}
                            />
                            <UpScrollButton top="88%" flatListRef={flatListRef} />
                        </>
                    )}
                </>
            ) : (
                <SkeletonPhotoBoothContainer>
                    <MyPageUserData activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />
                    <SkeletonMyPagePhotoBooth />
                </SkeletonPhotoBoothContainer>
            )}
        </MyPhotoBoothListContainer>
    );
}
