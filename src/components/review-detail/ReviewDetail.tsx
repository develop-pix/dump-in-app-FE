import { useEffect, useState } from 'react';
import { Dimensions, NativeScrollEvent } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { useDispatch } from 'react-redux';

import NextIcon from 'assets/image/icon/btn_next.svg';
import PrevIcon from 'assets/image/icon/btn_prev.svg';
import { GetReviewData } from 'hooks/axios/Review';
import { storage } from 'hooks/mmkv/storage';
import { setBranchReview } from 'hooks/redux/branchReviewDetailSlice';
import { setCategoryReview } from 'hooks/redux/categoryReviewDetailSlice';
import { setHomeReview } from 'hooks/redux/homeReviewDetailSlice';
import { setMyPageReview } from 'hooks/redux/myPageReviewDetailSlice';
import { useAppSelector } from 'hooks/redux/store';
import {
    CategoryStackScreenProps,
    HomeStackScreenProps,
    LocationStackScreenProps,
    MyPageStackScreenProps,
} from 'interfaces/Navigation.interface';
import {
    ButtonContainer,
    DotActive,
    DotContainer,
    EmptyDot,
    FillDot,
    NextButtonContainer,
    PrevButtonContainer,
    ReviewDetailCarousel,
    ReviewDetailForm,
    ReviewDetailFormContainer,
    ReviewDetailFormWrapper,
} from 'styles/layout/review-detail/ReviewDetail.style';

import ReviewDescription from './ReviewDescription';

export default function ReviewDetail() {
    const [carouselActive, setCarouselActive] = useState(0);

    const route = useRoute<
        | HomeStackScreenProps<'ReviewDetail'>['route']
        | LocationStackScreenProps<'ReviewDetail'>['route']
        | MyPageStackScreenProps<'ReviewDetail'>['route']
        | CategoryStackScreenProps<'ReviewDetail'>['route']
    >();
    const navigation = useNavigation<
        | HomeStackScreenProps<'ReviewDetail'>['navigation']
        | LocationStackScreenProps<'ReviewDetail'>['navigation']
        | MyPageStackScreenProps<'ReviewDetail'>['navigation']
        | CategoryStackScreenProps<'ReviewDetail'>['navigation']
    >();
    const routes = navigation.getState().routes;
    const tabRouteName = routes[0].name;

    const dispatch = useDispatch();
    const { mainThumbnailImageUrl, image } = useAppSelector(state => {
        switch (tabRouteName) {
            case 'Home':
                return state.homeReviewDetail;
            case 'Location':
                return state.branchReviewDetail;
            case 'MyPage':
                return state.myPageReviewDetail;
            case 'Category':
                return state.categoryReviewDetail;
            default:
                return state.homeReviewDetail;
        }
    });
    const accessToken = storage.getString('token.accessToken');

    /** 캐러셀동작 */
    const onScrollCarousel = (nativeEvent: NativeScrollEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide !== carouselActive && slide <= image.length) {
                setCarouselActive(slide);
            }
        }
    };

    //TODO: 좌우 버튼 클릭시 리뷰이동 (navigation)
    /** < 버튼 클릭 */
    const onPressPrevButton = () => {};

    /** > 버튼 클릭 */
    const onPressNextButton = () => {};

    // ReviewData fetch 및 dataSet
    useEffect(() => {
        const getReviewData = async () => {
            const fetchData = await GetReviewData(route.params.reviewID);

            if (fetchData.success) {
                switch (tabRouteName) {
                    case 'Home':
                        dispatch(setHomeReview(fetchData.data));
                        break;
                    case 'Location':
                        dispatch(setBranchReview(fetchData.data));
                        break;
                    case 'MyPage':
                        dispatch(setMyPageReview(fetchData.data));
                        break;
                    case 'Category':
                        dispatch(setCategoryReview(fetchData.data));
                        break;
                }
            }
        };
        getReviewData();
    }, [accessToken, dispatch, route.params.reviewID, tabRouteName]);

    return (
        <ReviewDetailFormContainer>
            <ReviewDetailForm>
                <ReviewDetailFormWrapper>
                    <ReviewDetailCarousel
                        scrollEnabled={true}
                        onScroll={({ nativeEvent }) => onScrollCarousel(nativeEvent)}
                        horizontal
                        pagingEnabled
                        pinchGestureEnabled={false}
                        scrollEventThrottle={1}
                        showsHorizontalScrollIndicator={false}
                        snapToAlignment="start"
                        decelerationRate="fast">
                        {mainThumbnailImageUrl && (
                            <FastImage
                                style={{ width: Dimensions.get('window').width }}
                                source={{
                                    uri: mainThumbnailImageUrl,
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        )}
                        {image.map(imageData => {
                            return (
                                imageData.imageUrl && (
                                    <FastImage
                                        key={imageData.id}
                                        style={{ width: Dimensions.get('window').width }}
                                        source={{
                                            uri: imageData.imageUrl,
                                        }}
                                        resizeMode={FastImage.resizeMode.contain}
                                    />
                                )
                            );
                        })}
                    </ReviewDetailCarousel>
                    {image.length > 0 && (
                        <DotContainer>
                            {carouselActive === 0 ? <FillDot /> : <EmptyDot />}
                            {image.map((_, index) => (
                                <DotActive key={index}>
                                    {index + 1 === carouselActive ? <FillDot /> : <EmptyDot />}
                                </DotActive>
                            ))}
                        </DotContainer>
                    )}
                    <ButtonContainer>
                        <PrevButtonContainer onPress={onPressPrevButton}>
                            <PrevIcon width={40} height={40} />
                        </PrevButtonContainer>
                        <NextButtonContainer onPress={onPressNextButton}>
                            <NextIcon width={40} height={40} />
                        </NextButtonContainer>
                    </ButtonContainer>
                    <ReviewDescription />
                </ReviewDetailFormWrapper>
            </ReviewDetailForm>
        </ReviewDetailFormContainer>
    );
}
