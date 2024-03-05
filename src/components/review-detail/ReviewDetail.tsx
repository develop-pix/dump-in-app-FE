import { useEffect, useState } from 'react';
import { NativeScrollEvent, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';

import NextIcon from 'assets/image/icon/btn_next.svg';
import PrevIcon from 'assets/image/icon/btn_prev.svg';
import { GetReviewData } from 'hooks/axios/ReviewDetail';
import { storage } from 'hooks/mmkv/storage';
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
    const [carouselActive, setCarouselActive] = useState<number>(0);

    const route = useRoute<
        | HomeStackScreenProps<'ReviewDetail'>['route']
        | LocationStackScreenProps<'ReviewDetail'>['route']
        | MyPageStackScreenProps<'ReviewDetail'>['route']
    >();
    const platform = Platform.OS;
    const dispatch = useDispatch();
    const { mainThumbnailImageUrl, image } = useAppSelector(state => state.branchReviewDetail);
    const accessToken = storage.getString('token.accessToken');

    /** 캐러셀동작 */
    const onScrollCarousel = (nativeEvent: NativeScrollEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide !== carouselActive) {
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
            const fetchData = await GetReviewData(accessToken, route.params.reviewID);
            if (fetchData.data) {
                console.log('fetchData.data');
                console.log(fetchData.data);
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
        };
        getReviewData();
    }, [accessToken, dispatch, route.params.reviewID]);

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
                            <PrevIcon width={40} height={40} />
                        </PrevButtonContainer>

                        <NextButtonContainer onPress={onPressNextButton}>
                            <NextIcon width={40} height={40} />
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
