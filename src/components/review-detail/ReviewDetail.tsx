import { useEffect, useRef, useState } from 'react';
import { NativeScrollEvent, Platform } from 'react-native';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';

import NextIcon from 'assets/image/icon/btn_next.svg';
import PrevIcon from 'assets/image/icon/btn_prev.svg';
import { GetReviewData, GetReviewReels } from 'hooks/axios/Review';
import {
    setBranchName,
    setCameraShot,
    setConcept,
    setContent,
    setCurlAmount,
    setDate,
    setFrameColor,
    setGoodsAmount,
    setImage,
    setIsLiked,
    setIsMine,
    setLikeCount,
    setMainThumbnailImageUrl,
    setParticipants,
    setReviewID,
    setUserNickname,
} from 'hooks/redux/branchReviewDetailSlice';
import { useAppSelector } from 'hooks/redux/store';
import {
    CategoryStackScreenProps,
    HomeStackScreenProps,
    LocationStackScreenProps,
    MyPageStackScreenProps,
} from 'interfaces/Navigation.interface';
import { colors } from 'styles/base/Variable';
import { FontWhiteGreySmallerMedium, FontWhiteSmallerMedium } from 'styles/layout/reuse/text/Text.style';
import {
    ButtonContainer,
    DotActive,
    DotContainer,
    NextButtonContainer,
    PrevButtonContainer,
    ReviewDetailCarousel,
    ReviewDetailForm,
    ReviewDetailFormContainer,
    ReviewDetailFormWrapper,
    ReviewImage,
    ReviewImageContainer,
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
        | HomeStackScreenProps<'Home'>['navigation']
        | LocationStackScreenProps<'Branch'>['navigation']
        | MyPageStackScreenProps<'MyPage'>['navigation']
        | CategoryStackScreenProps<'PhotoBoothDetail'>['navigation']
    >();
    const isFocused = useIsFocused();
    const platform = Platform.OS;
    const dispatch = useDispatch();
    const { mainThumbnailImageUrl, image } = useAppSelector(state => state.branchReviewDetail);

    /** 캐러셀동작 */
    const onScrollCarousel = (nativeEvent: NativeScrollEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide !== carouselActive) {
                setCarouselActive(slide);
            }
        }
    };

    //TODO: 테스트 완료후 삭제
    console.log('route');
    console.log(route);

    //TODO: 좌우 버튼 클릭시 리뷰이동 (navigation)
    /** < 버튼 클릭 */
    const onPressPrevButton = () => {
        if (isFocused) {
            setCarouselActive(0);
            switch (navigation.getId()) {
                case 'HomeStack':
                    (navigation as HomeStackScreenProps<'Home'>['navigation']).navigate('ReviewDetail', {
                        reviewID: prevReviewID.current,
                        prevReviewID: nextReviewID.current,
                        reviewType: 'filter',
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                    });
                    break;
                case 'LocationStack':
                    (navigation as LocationStackScreenProps<'Branch'>['navigation']).navigate('ReviewDetail', {
                        reviewID: prevReviewID.current,
                        prevReviewID: nextReviewID.current,
                        reviewType: 'photo_booth',
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                    });
                    break;
                case 'MyPageStack':
                    (navigation as MyPageStackScreenProps<'MyPage'>['navigation']).navigate('ReviewDetail', {
                        reviewID: prevReviewID.current,
                        prevReviewID: nextReviewID.current,
                        reviewType: 'like_review' || 'my_review',
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                    });
                    break;
                case 'CategoryStack':
                    (navigation as CategoryStackScreenProps<'Category'>['navigation']).navigate('ReviewDetail', {
                        reviewID: prevReviewID.current,
                        prevReviewID: nextReviewID.current,
                        reviewType: 'photo_booth_brand',
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                    });
                    break;
            }
        }
    };

    /** > 버튼 클릭 */
    const onPressNextButton = () => {
        if (isFocused) {
            setCarouselActive(0);
            switch (navigation.getId()) {
                case 'HomeStack':
                    (navigation as HomeStackScreenProps<'Home'>['navigation']).navigate('ReviewDetail', {
                        reviewID: nextReviewID.current,
                        prevReviewID: route.params.reviewID,
                        reviewType: 'filter',
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                    });
                    break;
                case 'LocationStack':
                    (navigation as LocationStackScreenProps<'Branch'>['navigation']).navigate('ReviewDetail', {
                        reviewID: nextReviewID.current,
                        prevReviewID: route.params.reviewID,
                        reviewType: 'photo_booth',
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                    });
                    break;
                case 'MyPageStack':
                    (navigation as MyPageStackScreenProps<'MyPage'>['navigation']).navigate('ReviewDetail', {
                        reviewID: nextReviewID.current,
                        prevReviewID: route.params.reviewID,
                        reviewType: 'like_review' || 'my_review',
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                    });
                    break;
                case 'CategoryStack':
                    (navigation as CategoryStackScreenProps<'Category'>['navigation']).navigate('ReviewDetail', {
                        reviewID: nextReviewID.current,
                        prevReviewID: route.params.reviewID,
                        reviewType: 'photo_booth_brand',
                        frameColor: route.params.frameColor,
                        participants: route.params.participants,
                        cameraShot: route.params.cameraShot,
                        concept: route.params.concept,
                    });
                    break;
            }
        }
    };

    // ReviewData fetch 및 dataSet
    useEffect(() => {
        const getReviewData = async () => {
            try {
                const fetchData = await GetReviewData(route.params.reviewID);
                if (fetchData.data) {
                    dispatch(setReviewID(fetchData.data.id));
                    dispatch(setImage(fetchData.data.image));
                    dispatch(setConcept(fetchData.data.concept));
                    dispatch(setIsMine(fetchData.data.isMine));
                    dispatch(setIsLiked(fetchData.data.isLiked));
                    dispatch(setUserNickname(fetchData.data.userNickname));
                    dispatch(setContent(fetchData.data.content));
                    dispatch(setMainThumbnailImageUrl(fetchData.data.mainThumbnailImageUrl));
                    dispatch(setDate(fetchData.data.date));
                    dispatch(setFrameColor(fetchData.data.frameColor));
                    dispatch(setParticipants(fetchData.data.participants));
                    dispatch(setCameraShot(fetchData.data.cameraShot));
                    dispatch(setGoodsAmount(fetchData.data.goodsAmount));
                    dispatch(setCurlAmount(fetchData.data.curlAmount));
                    dispatch(setLikeCount(fetchData.data.likeCount));
                    dispatch(setBranchName(fetchData.data.photoBoothBrandName + ' ' + fetchData.data.photoBoothName));
                }
            } catch (error) {
                console.log('getReviewDataError ' + error);
            }
        };

        const getReviewReelsData = async () => {
            try {
                //TODO: ReviewDetail 페이지 진입시 이전리뷰ID, (filter 일경우 지역,프레임색상,참가자수, 카메라샷, 해시태그)
                const reelsData = await GetReviewReels(
                    route.params.prevReviewID,
                    route.params.reviewType,
                    route.params.frameColor,
                    route.params.participants,
                    route.params.cameraShot,
                    route.params.concept,
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
        route.params.participants,
        route.params.prevReviewID,
        route.params.reviewID,
        route.params.reviewType,
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
                        <ReviewImageContainer>
                            {mainThumbnailImageUrl ? <ReviewImage source={{ uri: mainThumbnailImageUrl }} /> : null}
                        </ReviewImageContainer>
                        {image.map(imageData => {
                            return (
                                <ReviewImageContainer key={imageData.id}>
                                    {mainThumbnailImageUrl ? (
                                        <ReviewImage source={{ uri: imageData.imageUrl }} />
                                    ) : null}
                                </ReviewImageContainer>
                            );
                        })}
                    </ReviewDetailCarousel>
                    <DotContainer>
                        <DotActive>
                            {carouselActive === 0 ? (
                                <FontWhiteSmallerMedium>●</FontWhiteSmallerMedium>
                            ) : (
                                <FontWhiteGreySmallerMedium>●</FontWhiteGreySmallerMedium>
                            )}
                        </DotActive>

                        {image.map((_, index) => (
                            <DotActive key={index}>
                                {index + 1 === carouselActive ? (
                                    <FontWhiteSmallerMedium>●</FontWhiteSmallerMedium>
                                ) : (
                                    <FontWhiteGreySmallerMedium>●</FontWhiteGreySmallerMedium>
                                )}
                            </DotActive>
                        ))}
                    </DotContainer>
                    <ButtonContainer>
                        <PrevButtonContainer onPress={onPressPrevButton}>
                            <PrevIcon />
                        </PrevButtonContainer>

                        <NextButtonContainer onPress={onPressNextButton}>
                            <NextIcon />
                        </NextButtonContainer>
                    </ButtonContainer>
                    {platform === 'ios' ? (
                        <LinearGradient
                            colors={['transparent', colors.lightblack]}
                            locations={[0, 1]}
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 150,
                                height: 300,
                            }}
                        />
                    ) : (
                        <LinearGradient
                            colors={['transparent', colors.lightblack]}
                            locations={[0.1, 1]}
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 120,
                                height: 300,
                            }}
                        />
                    )}
                    <ReviewDescription />
                </ReviewDetailFormWrapper>
            </ReviewDetailForm>
        </ReviewDetailFormContainer>
    );
}
