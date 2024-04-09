import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SearchNoData from 'components/reuse/alert/SearchNoData';
import { NormalButton } from 'components/reuse/button/NormalButton';
import { UpScrollButton } from 'components/reuse/button/UpScrollButton';
import SkeletonGetMoreMyPageReview from 'components/reuse/skeleton/SkeletonGetMoreMyPageReview';
import SkeletonMyPageReview from 'components/reuse/skeleton/SkeletonMyPageReview';
import { GetMyPostList } from 'hooks/axios/MyPage';
import { useAppSelector } from 'hooks/redux/store';
import { ReviewProps } from 'interfaces/Home.interface';
import { MainTabScreenProps } from 'interfaces/Navigation.interface';
import {
    MyPostContainer,
    MyPostFlatListContainer,
    MyPostListContainer,
    SkeletonMyPostContainer,
} from 'styles/layout/my-page/MyActivity/MyPostList.style';
import { FlatListButtonContainer } from 'styles/layout/reuse/button/NormalButton.style';

import MyPostFrame from './MyPostFrame';

export default function MyPostList() {
    // 무한 스크롤 페이지
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [reviewData, setReviewData] = useState<ReviewProps[]>([]);
    const [dataEnd, setDataEnd] = useState<boolean>(false);

    const dataLimit = 6;
    const flatListRef = useRef<FlatList>(null);
    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;
    const navigation = useNavigation<MainTabScreenProps<'HomeTab'>['navigation']>();

    /** FlatList renderItem */
    const renderReviewItem = useCallback(({ item }: { item: ReviewProps }) => {
        return <MyPostFrame data={item} />;
    }, []);

    /** FlatList onEndReached */
    const onEndReached = async () => {
        const newData = await getMyPost();
        setReviewData(prevData => [...prevData, ...newData.results]);
        newData.next === null && setDataEnd(prev => !prev);
    };

    /** FlatList listFooterItem */
    const renderFooterItem = useCallback(() => {
        const onPressFooter = () => {
            navigation.navigate('MainTab', {
                screen: 'HomeTab',
                params: {
                    screen: 'Home',
                },
            });
        };

        return (
            <FlatListButtonContainer>
                <NormalButton text="게시글 보러가기" onPress={onPressFooter} />
            </FlatListButtonContainer>
        );
    }, [navigation]);

    /** 내가 좋아요 누른 게시글 항목 데이터 Get */
    const getMyPost = async () => {
        try {
            if (isLoggedIn) {
                const resultList = await GetMyPostList(dataLimit, dataLimit * page);
                setPage(prev => prev + 1);
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

            reviewList.next === null && setDataEnd(prev => !prev);
        };

        getFirstMyPost();
    }, []);

    return (
        <MyPostListContainer>
            {!isLoading ? (
                <MyPostContainer>
                    {dataEnd ? (
                        reviewData.length > 0 ? (
                            <MyPostFlatListContainer>
                                <FlatList
                                    data={reviewData}
                                    keyExtractor={item => item.id.toString()}
                                    ref={flatListRef}
                                    renderItem={renderReviewItem}
                                    numColumns={2}
                                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                                    ListFooterComponent={renderFooterItem}
                                />
                                <UpScrollButton top="88%" flatListRef={flatListRef} />
                            </MyPostFlatListContainer>
                        ) : (
                            <MyPostFlatListContainer>
                                <SearchNoData
                                    alertText="즐겨찾는 게시글이 없습니다."
                                    recommendText="마음에 드는 게시글을 찾아보세요!"
                                />
                                <FlatList
                                    data={reviewData}
                                    keyExtractor={item => item.id.toString()}
                                    ref={flatListRef}
                                    renderItem={renderReviewItem}
                                    numColumns={2}
                                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                                    scrollEnabled={false}
                                    ListFooterComponent={renderFooterItem}
                                />
                                <UpScrollButton top="88%" flatListRef={flatListRef} />
                            </MyPostFlatListContainer>
                        )
                    ) : (
                        <MyPostFlatListContainer>
                            <FlatList
                                data={reviewData}
                                keyExtractor={item => item.id.toString()}
                                ref={flatListRef}
                                renderItem={renderReviewItem}
                                numColumns={2}
                                columnWrapperStyle={{ justifyContent: 'space-between' }}
                                onEndReached={onEndReached}
                                onEndReachedThreshold={0.1}
                                ListFooterComponent={SkeletonGetMoreMyPageReview}
                            />
                            <UpScrollButton top="88%" flatListRef={flatListRef} />
                        </MyPostFlatListContainer>
                    )}
                </MyPostContainer>
            ) : (
                <SkeletonMyPostContainer>
                    <SkeletonMyPageReview />
                </SkeletonMyPostContainer>
            )}
        </MyPostListContainer>
    );
}
