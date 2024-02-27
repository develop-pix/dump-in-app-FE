import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';

import ReviewFrame from 'components/home/photo-booth-list/ReviewFrame';
import MyPageUserData from 'components/my-page/MyPageUserData';
import { UpScrollButton } from 'components/reuse/button/UpScrollButton';
import SkeletonGetMoreMyPageReview from 'components/reuse/skeleton/SkeletonGetMoreMyPageReview';
import SkeletonMyPageReview from 'components/reuse/skeleton/SkeletonMyPageReview';
import { ReviewProps } from 'interfaces/Home.interface';
import { MyPageUserDataProps } from 'interfaces/MyPage.interface';
import { colors } from 'styles/base/Variable';
import { MyReviewListContainer, SkeletonMyReviewContainer } from 'styles/layout/my-page/MyActivity/MyReviewList.style';
import { GetMyReviewList } from 'hooks/axios/MyPage';
import { useAppSelector } from 'hooks/redux/store';

export default function MyReviewList({ activeComponent, updateActiveComponent }: MyPageUserDataProps) {
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [reviewData, setReviewData] = useState<ReviewProps[]>([]);
    const [dataEnd, setDataEnd] = useState<boolean>(true);

    const dataLimit = 6;
    const flatListRef = useRef<FlatList>(null);
    const accessToken = useAppSelector(state => state.token).accessToken;

    /** 내 사진 항목 데이터 Get */
    const getMyReview = async () => {
        try {
            if (accessToken) {
                const resultList = await GetMyReviewList(accessToken, dataLimit, page);
                return resultList.data;
            }
        } catch (error) {
            console.log('GetReviewListError' + error);
        }
    };

    /** FlatList ListHeaderComponent */
    const renderHeader = useCallback(() => {
        return <MyPageUserData activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />;
    }, [activeComponent, updateActiveComponent]);

    /** FlatList renderItem */
    const renderReviewItem = useCallback(({ item }: { item: ReviewProps }) => {
        return <ReviewFrame data={item} />;
    }, []);

    /** FlatList onEndReached */
    const onEndReached = async () => {
        setPage(prev => prev + 1);
        const newData = await getMyReview();

        setReviewData(prevData => [...prevData, ...newData.results]);
        setIsLoading(false);
        newData.next !== null && setDataEnd(prev => !prev);
    };

    // MyPage 진입시 내 사진 항목 데이터 Get
    useEffect(() => {
        const getFirstMyReview = async () => {
            const reviewList = await getMyReview();
            setReviewData(reviewList.results);
            setIsLoading(false);
            reviewList.next !== null && setDataEnd(prev => !prev);
        };

        getFirstMyReview();
    }, []);

    return (
        <MyReviewListContainer>
            {!isLoading ? (
                <>
                    {dataEnd ? (
                        <>
                            <FlatList
                                contentContainerStyle={{
                                    height: '100%',
                                }}
                                data={reviewData}
                                keyExtractor={item => item.id.toString()}
                                ref={flatListRef}
                                ListHeaderComponent={renderHeader}
                                renderItem={renderReviewItem}
                                numColumns={2}
                                columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                            />
                            <UpScrollButton top="88%" flatListRef={flatListRef} />
                        </>
                    ) : (
                        <>
                            <FlatList
                                contentContainerStyle={{ backgroundColor: colors.lightblack }}
                                data={reviewData}
                                keyExtractor={item => item.id.toString()}
                                ref={flatListRef}
                                ListHeaderComponent={renderHeader}
                                renderItem={renderReviewItem}
                                numColumns={2}
                                columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                                onEndReached={onEndReached}
                                onEndReachedThreshold={0.1}
                                ListFooterComponent={SkeletonGetMoreMyPageReview}
                            />
                            <UpScrollButton top="88%" flatListRef={flatListRef} />
                        </>
                    )}
                </>
            ) : (
                <SkeletonMyReviewContainer>
                    <MyPageUserData activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />
                    <SkeletonMyPageReview />
                </SkeletonMyReviewContainer>
            )}
        </MyReviewListContainer>
    );
}
