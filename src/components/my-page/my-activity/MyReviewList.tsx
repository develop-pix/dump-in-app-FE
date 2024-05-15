import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SearchNoData from 'components/reuse/alert/SearchNoData';
import { NormalButton } from 'components/reuse/button/NormalButton';
import { UpScrollButton } from 'components/reuse/button/UpScrollButton';
import SkeletonGetMoreMyPageReview from 'components/reuse/skeleton/SkeletonGetMoreMyPageReview';
import SkeletonMyPageReview from 'components/reuse/skeleton/SkeletonMyPageReview';
import { GetMyReviewList } from 'hooks/axios/MyPage';
import { useAppSelector } from 'hooks/redux/store';
import { ReviewProps } from 'interfaces/Home.interface';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
import {
    MyReviewContainer,
    MyReviewFlatListContainer,
    MyReviewFrameContainer,
    MyReviewListContainer,
    SkeletonMyReviewContainer,
} from 'styles/layout/my-page/MyActivity/MyReviewList.style';
import { FlatListButtonContainer } from 'styles/layout/reuse/button/NormalButton.style';

import MyReviewFrame from './MyReviewFrame';

export default function MyReviewList() {
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [dataEnd, setDataEnd] = useState(false);
    const [scrollOffsetY, setScrollOffsetY] = useState(0);
    const [reviewData, setReviewData] = useState<ReviewProps[]>([]);

    const dataLimit = 6;
    const flatListRef = useRef<FlatList>(null);
    const navigation = useNavigation<MyPageStackScreenProps<'MyPage'>['navigation']>();
    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;

    /** 내 사진 항목 데이터 Get */
    const getMyReview = async () => {
        try {
            if (isLoggedIn) {
                const resultList = await GetMyReviewList(dataLimit, page * dataLimit);
                setPage(prev => prev + 1);
                return resultList.data;
            }
        } catch (error) {
            console.log('GetReviewListError' + error);
        }
    };

    /** FlatList renderItem */
    const renderReviewItem = useCallback(({ item }: { item: ReviewProps }) => {
        return (
            <MyReviewFrameContainer>
                <MyReviewFrame data={item} />
            </MyReviewFrameContainer>
        );
    }, []);

    /** FlatList onEndReached */
    const onEndReached = async () => {
        const newData = await getMyReview();

        setReviewData(prevData => [...prevData, ...newData.results]);
        setIsLoading(false);
        newData.next === null && setDataEnd(prev => !prev);
    };

    /** FlatList listFooterItem */
    const renderFooterItem = useCallback(() => {
        const onPressFooter = () => {
            isLoggedIn && navigation.navigate('AddReviewModal');
        };

        return (
            <FlatListButtonContainer>
                <NormalButton text="새 리뷰 등록하기" onPress={onPressFooter} />
            </FlatListButtonContainer>
        );
    }, [isLoggedIn, navigation]);

    // MyPage 진입시 내 사진 항목 데이터 Get
    useEffect(() => {
        const getFirstMyReview = async () => {
            const reviewList = await getMyReview();
            setReviewData(reviewList.results);
            setIsLoading(false);
            reviewList.next === null && setDataEnd(prev => !prev);
        };

        getFirstMyReview();
    }, []);

    return (
        <MyReviewListContainer>
            {!isLoading ? (
                <MyReviewContainer>
                    {dataEnd ? (
                        reviewData.length > 0 ? (
                            <MyReviewFlatListContainer>
                                <FlatList
                                    data={reviewData}
                                    keyExtractor={item => item.id.toString()}
                                    ref={flatListRef}
                                    renderItem={renderReviewItem}
                                    numColumns={2}
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={{
                                        paddingVertical: 16,
                                    }}
                                    columnWrapperStyle={{
                                        paddingHorizontal: 16,
                                        columnGap: 16,
                                    }}
                                    onMomentumScrollEnd={event => {
                                        setScrollOffsetY(event.nativeEvent.contentOffset.y);
                                    }}
                                    ListFooterComponent={renderFooterItem}
                                />
                                {scrollOffsetY > 0 && <UpScrollButton flatListRef={flatListRef} />}
                            </MyReviewFlatListContainer>
                        ) : (
                            <MyReviewFlatListContainer>
                                <SearchNoData
                                    alertText="내 사진이 없습니다."
                                    recommendText="첫 리뷰를 등록해 보세요!"
                                />
                                {renderFooterItem()}
                            </MyReviewFlatListContainer>
                        )
                    ) : (
                        <MyReviewFlatListContainer>
                            <FlatList
                                data={reviewData}
                                keyExtractor={item => item.id.toString()}
                                ref={flatListRef}
                                renderItem={renderReviewItem}
                                numColumns={2}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{
                                    paddingVertical: 16,
                                }}
                                columnWrapperStyle={{
                                    paddingHorizontal: 16,
                                    columnGap: 16,
                                }}
                                onEndReached={onEndReached}
                                onEndReachedThreshold={0.1}
                                ListFooterComponent={SkeletonGetMoreMyPageReview}
                            />
                            <UpScrollButton flatListRef={flatListRef} />
                        </MyReviewFlatListContainer>
                    )}
                </MyReviewContainer>
            ) : (
                <SkeletonMyReviewContainer>
                    <SkeletonMyPageReview />
                </SkeletonMyReviewContainer>
            )}
        </MyReviewListContainer>
    );
}
