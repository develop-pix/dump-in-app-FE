import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';

import MyPageUserData from 'components/my-page/MyPageUserData';
import { UpScrollButton } from 'components/reuse/button/UpScrollButton';
import SkeletonGetMoreMyPageReview from 'components/reuse/skeleton/SkeletonGetMoreMyPageReview';
import SkeletonMyPageReview from 'components/reuse/skeleton/SkeletonMyPageReview';
import { ReviewProps } from 'interfaces/Home.interface';
import { MyPageUserDataProps } from 'interfaces/MyPage.interface';
import { MyPostListContainer, SkeletonMyPostContainer } from 'styles/layout/my-page/MyActivity/MyPostList.style';

import MyPostFrame from './MyPostFrame';
import { useAppSelector } from 'hooks/redux/store';
import { GetMyPostList } from 'hooks/axios/MyPage';

export default function MyPostList({ activeComponent, updateActiveComponent }: MyPageUserDataProps) {
    // 무한 스크롤 페이지
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [reviewData, setReviewData] = useState<ReviewProps[]>([]);
    const [dataEnd, setDataEnd] = useState<boolean>(true);

    const dataLimit = 6;
    const flatListRef = useRef<FlatList>(null);
    const accessToken = useAppSelector(state => state.token).accessToken;

    /** FlatList ListHeaderComponent */
    const renderHeader = useCallback(() => {
        return <MyPageUserData activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />;
    }, [activeComponent, updateActiveComponent]);

    /** FlatList renderItem */
    const renderReviewItem = useCallback(({ item }: { item: ReviewProps }) => {
        return <MyPostFrame data={item} />;
    }, []);

    /** FlatList onEndReached */
    const onEndReached = async () => {
        setPage(prev => prev + 1);
        const newData = await getMyPost();

        setReviewData(prevData => [...prevData, ...newData.results]);
        setIsLoading(false);
        newData.next !== null && setDataEnd(prev => !prev);
    };

    /** 내가 좋아요 누른 게시글 항목 데이터 Get */
    const getMyPost = async () => {
        try {
            if (accessToken) {
                const resultList = await GetMyPostList(accessToken, dataLimit, page);
                return resultList.data;
            }
        } catch (error) {
            console.log('GetMyPostList ' + error);
        }
    };

    // MyPost 진입시 내가 좋아요 누른 리뷰 항목 데이터 Get
    useEffect(() => {
        const getFirstMyPost = async () => {
            const reviewList = await getMyPost();
            setReviewData(reviewList.results);
            setIsLoading(false);

            reviewList.next !== null && setDataEnd(prev => !prev);
        };

        getFirstMyPost();
    }, []);

    return (
        <MyPostListContainer>
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
                                onEndReached={onEndReached}
                                onEndReachedThreshold={0.1}
                                ListFooterComponent={SkeletonGetMoreMyPageReview}
                            />
                            <UpScrollButton top="88%" flatListRef={flatListRef} />
                        </>
                    )}
                </>
            ) : (
                <SkeletonMyPostContainer>
                    <MyPageUserData activeComponent={activeComponent} updateActiveComponent={updateActiveComponent} />
                    <SkeletonMyPageReview />
                </SkeletonMyPostContainer>
            )}
        </MyPostListContainer>
    );
}
