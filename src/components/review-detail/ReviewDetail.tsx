import { useEffect, useRef, useState } from 'react';
import { Dimensions, NativeScrollEvent } from 'react-native';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { useDispatch } from 'react-redux';

import NextIcon from 'assets/image/icon/btn_next.svg';
import PrevIcon from 'assets/image/icon/btn_prev.svg';
import { GetReviewData, GetReviewReels } from 'hooks/axios/Review';
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
    const nextReviewID = useRef(0);
    const prevReviewID = useRef(0);

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
    const isFocused = useIsFocused();

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

    /** 캐러셀동작 */
    const onScrollCarousel = (nativeEvent: NativeScrollEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide !== carouselActive && slide <= image.length) {
                setCarouselActive(slide);
            }
        }
    };

    /** < 버튼 클릭 */
    const onPressPrevButton = () => {
        if (isFocused && prevReviewID.current !== null) {
            setCarouselActive(0);
            switch (navigation.getId()) {
                case 'HomeStack':
                    (navigation as HomeStackScreenProps<'ReviewDetail'>['navigation']).navigate('ReviewDetail', {
                        reviewID: prevReviewID.current,
                        reviewType: 'filter',
                        photoBoothLocation: route.params.photoBoothLocation,
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                        keyword: route.params.keyword,
                        isEventReview: route.params.isEventReview,
                    });
                    break;
                case 'LocationStack':
                    (navigation as LocationStackScreenProps<'ReviewDetail'>['navigation']).navigate('ReviewDetail', {
                        reviewID: prevReviewID.current,
                        reviewType: 'photo_booth',
                        photoBoothLocation: route.params.photoBoothLocation,
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                        keyword: undefined,
                        isEventReview: undefined,
                    });
                    break;
                case 'MyPageStack':
                    (navigation as MyPageStackScreenProps<'ReviewDetail'>['navigation']).navigate('ReviewDetail', {
                        reviewID: prevReviewID.current,
                        reviewType: 'like' || 'mine',
                        photoBoothLocation: route.params.photoBoothLocation,
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                        keyword: undefined,
                        isEventReview: undefined,
                    });
                    break;
                case 'CategoryStack':
                    (navigation as CategoryStackScreenProps<'ReviewDetail'>['navigation']).navigate('ReviewDetail', {
                        reviewID: prevReviewID.current,
                        reviewType: 'photo_booth_brand',
                        photoBoothLocation: route.params.photoBoothLocation,
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                        keyword: route.params.keyword,
                        isEventReview: route.params.isEventReview,
                    });
                    break;
            }
        }
    };

    /** > 버튼 클릭 */
    const onPressNextButton = () => {
        if (isFocused && nextReviewID.current !== null) {
            setCarouselActive(0);
            switch (navigation.getId()) {
                case 'HomeStack':
                    (navigation as HomeStackScreenProps<'ReviewDetail'>['navigation']).navigate('ReviewDetail', {
                        reviewID: nextReviewID.current,
                        reviewType: 'filter',
                        photoBoothLocation: route.params.photoBoothLocation,
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                        keyword: route.params.keyword,
                        isEventReview: route.params.isEventReview,
                    });
                    break;
                case 'LocationStack':
                    (navigation as LocationStackScreenProps<'ReviewDetail'>['navigation']).navigate('ReviewDetail', {
                        reviewID: nextReviewID.current,
                        reviewType: 'photo_booth',
                        photoBoothLocation: route.params.photoBoothLocation,
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                        keyword: route.params.keyword,
                        isEventReview: route.params.isEventReview,
                    });
                    break;
                case 'MyPageStack':
                    (navigation as MyPageStackScreenProps<'ReviewDetail'>['navigation']).navigate('ReviewDetail', {
                        reviewID: nextReviewID.current,
                        reviewType: 'like' || 'mine',
                        photoBoothLocation: route.params.photoBoothLocation,
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                        keyword: route.params.keyword,
                        isEventReview: route.params.isEventReview,
                    });
                    break;
                case 'CategoryStack':
                    (navigation as CategoryStackScreenProps<'ReviewDetail'>['navigation']).navigate('ReviewDetail', {
                        reviewID: nextReviewID.current,
                        reviewType: 'photo_booth_brand',
                        photoBoothLocation: route.params.photoBoothLocation,
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                        keyword: route.params.keyword,
                        isEventReview: route.params.isEventReview,
                    });
                    break;
            }
        }
    };

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

        const getReviewReelsData = async () => {
            try {
                //TODO: ReviewDetail 페이지 진입시 이전리뷰ID, (filter 일경우 지역,프레임색상,참가자수, 카메라샷, 해시태그)
                const reelsData = await GetReviewReels(
                    route.params.reviewType,
                    route.params.photoBoothLocation,
                    route.params.frameColor,
                    route.params.participants,
                    route.params.cameraShot,
                    route.params.concept,
                    route.params.keyword,
                    route.params.isEventReview,
                    route.params.reviewID,
                );
                nextReviewID.current = reelsData.data.nextReviewId;
                prevReviewID.current = reelsData.data.prevReviewId;
            } catch (error) {
                console.log('getReelsDataError ' + error);
            }
        };

        getReviewData();
        getReviewReelsData();
    }, [
        dispatch,
        route.params.cameraShot,
        route.params.concept,
        route.params.frameColor,
        route.params.isEventReview,
        route.params.keyword,
        route.params.participants,
        route.params.photoBoothLocation,
        route.params.reviewID,
        route.params.reviewType,
        tabRouteName,
    ]);

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
                        {prevReviewID.current !== null && (
                            <PrevButtonContainer onPress={onPressPrevButton}>
                                <PrevIcon />
                            </PrevButtonContainer>
                        )}

                        {nextReviewID.current !== null && (
                            <NextButtonContainer onPress={onPressNextButton}>
                                <NextIcon />
                            </NextButtonContainer>
                        )}
                    </ButtonContainer>
                    <ReviewDescription />
                </ReviewDetailFormWrapper>
            </ReviewDetailForm>
        </ReviewDetailFormContainer>
    );
}
