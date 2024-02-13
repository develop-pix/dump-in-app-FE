import { useEffect, useState } from 'react';
import { NativeScrollEvent, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import NextIcon from 'assets/image/icon/btn_next.svg';
import PrevIcon from 'assets/image/icon/btn_prev.svg';
import { GetReviewData } from 'hooks/axios/ReviewDetail';
import {
    HomeStackScreenProps,
    LocationStackScreenProps,
    MyPageStackScreenProps,
} from 'interfaces/Navigation.interface';
import { ReviewData } from 'interfaces/ReviewDetail.interface';
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

// FIXME: 해쉬태그, isLiked, isMine 안 나오는 문제 확인 및 수정 필요함
export default function ReviewDetail() {
    const [carouselActive, setCarouselActive] = useState<number>(0);
    const [reviewData, setReviewData] = useState<ReviewData>({
        id: null,
        image: [],
        concept: [],
        isMine: true,
        isLiked: false,
        userNickname: null,
        createdAt: null,
        updatedAt: null,
        content: null,
        mainThumbnailImageUrl: '',
        date: null,
        frameColor: null,
        participants: 0,
        cameraShot: null,
        goodsAmount: null,
        curlAmount: null,
        isPublic: false,
        viewCount: 0,
        likeCount: 0,
        photoBoothId: null,
    });

    const route = useRoute<
        | HomeStackScreenProps<'ReviewDetail'>['route']
        | LocationStackScreenProps<'ReviewDetail'>['route']
        | MyPageStackScreenProps<'ReviewDetail'>['route']
    >();
    const platform = Platform.OS;
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

    // ReviewData fetch 및 set
    useEffect(() => {
        const getReviewData = async () => {
            const fetchData = await GetReviewData(route.params.reviewID);
            setReviewData(fetchData.data);
        };
        getReviewData();
    }, [route.params.reviewID]);

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
                            {reviewData.mainThumbnailImageUrl ? (
                                <ReviewImage source={{ uri: reviewData.mainThumbnailImageUrl }} />
                            ) : null}
                        </ReviewImageContainer>
                        {reviewData.image.map(imageData => {
                            return (
                                <ReviewImageContainer key={imageData.id}>
                                    {reviewData.mainThumbnailImageUrl ? (
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

                        {reviewData.image.map((_, index) => (
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
                    <ReviewDescription
                        date={reviewData.date}
                        content={reviewData.content}
                        concept={reviewData.concept}
                        isLiked={reviewData.isLiked}
                    />
                </ReviewDetailFormWrapper>
            </ReviewDetailForm>
        </ReviewDetailFormContainer>
    );
}
