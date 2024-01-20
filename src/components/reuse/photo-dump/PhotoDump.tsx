import { useRef, useState } from 'react';
import { Animated, Dimensions, NativeScrollEvent } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import NextIcon from 'assets/image/icon/btn_next.svg';
import SearchIcon from 'assets/image/icon/search.svg';
import SearchNoData from 'components/reuse/alert/SearchNoData';
import { NormalButton } from 'components/reuse/button/NormalButton';
import { LocationStackScreenProps } from 'interfaces/Navigation.interface';
import { PhotoDumpProps } from 'interfaces/reuse/photo-dump/PhotoDump.interface';
import {
    CarouselContainer,
    CarouselScrollView,
    FindMoreReviewContainer,
    FindMoreReviewWrapper,
    PhotoDumpContainer,
    ReviewBlurImage,
    Reviews,
    SeeMoreButton,
    SubTitleContainer,
} from 'styles/layout/reuse/photo-dump/PhotoDump.style';
import {
    FontWhiteNormalMedium,
    FontWhiteSmallerMedium,
    FontWhiteSmallerSemiboldWithLineSpacing,
} from 'styles/layout/reuse/text/Text.style';

import Review from './Review';

export default function PhotoDump({ photoBoothName, reviewData }: PhotoDumpProps) {
    const navigation = useNavigation<LocationStackScreenProps<'Branch'>['navigation']>();
    const route = useRoute<LocationStackScreenProps<'Branch'>['route']>();

    const pageWidth = Dimensions.get('window').width * 0.8;
    const gap = Dimensions.get('window').width * 0.04;
    const offset = Dimensions.get('window').width * 0.06;

    const [reviewActive, setReviewActive] = useState<number>(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const translateIn = scrollX.interpolate({
        inputRange: [0, 70],
        outputRange: [1, 0.5],
        extrapolate: 'clamp',
    });

    const translateOut = scrollX.interpolate({
        inputRange: [0, 100],
        outputRange: [0.5, 1],
        extrapolate: 'clamp',
    });

    /** 현재 review Set */
    const onCarouselScroll = (nativeEvent: NativeScrollEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            slide !== reviewActive ? setReviewActive(slide) : null;
        }
    };

    const onPressRegistrationReview = () => {
        navigation.navigate('AddReviewModal', {
            branchID: route.params.branchID,
        });
    };

    const onPressHomeSearch = () => {
        navigation.navigate('HomeSearch', {
            photoBoothName,
        });
    };

    return (
        <PhotoDumpContainer>
            <SubTitleContainer>
                <FontWhiteSmallerSemiboldWithLineSpacing>PHOTO DUMP</FontWhiteSmallerSemiboldWithLineSpacing>
            </SubTitleContainer>
            {reviewData.length === 0 ? (
                <>
                    <SearchNoData
                        alertText="등록된 후기가 없습니다."
                        recommendText="내 사진을 첫번째로 등록해 보세요!"
                    />
                    <NormalButton text="내 사진 등록하기" onPress={onPressRegistrationReview} />
                </>
            ) : (
                <CarouselContainer>
                    <CarouselScrollView
                        onScroll={({ nativeEvent }) => onCarouselScroll(nativeEvent)}
                        scrollEventThrottle={0}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        automaticallyAdjustContentInsets={false}
                        snapToAlignment="start"
                        decelerationRate="fast"
                        snapToInterval={pageWidth + gap}
                        contentContainerStyle={{
                            paddingHorizontal: offset + gap / 2,
                        }}>
                        {reviewData.map(item => {
                            return (
                                <Reviews key={item.reviewID}>
                                    {reviewData[reviewActive] === undefined ? (
                                        <Animated.View style={{ opacity: translateOut }}>
                                            <Review
                                                reviewID={item.reviewID}
                                                reviewImage={item.representativeImage}
                                                reviewDescription={item.description}
                                                reviewHashtags={item.hashtag}
                                            />
                                        </Animated.View>
                                    ) : item.reviewID === reviewData[reviewActive].reviewID ? (
                                        <Animated.View style={{ opacity: translateIn }}>
                                            <Review
                                                reviewID={item.reviewID}
                                                reviewImage={item.representativeImage}
                                                reviewDescription={item.description}
                                                reviewHashtags={item.hashtag}
                                            />
                                        </Animated.View>
                                    ) : (
                                        <Animated.View style={{ opacity: translateOut }}>
                                            <Review
                                                reviewID={item.reviewID}
                                                reviewImage={item.representativeImage}
                                                reviewDescription={item.description}
                                                reviewHashtags={item.hashtag}
                                            />
                                        </Animated.View>
                                    )}
                                </Reviews>
                            );
                        })}
                        <Reviews>
                            <FindMoreReviewContainer>
                                <ReviewBlurImage
                                    source={{
                                        uri: reviewData[reviewData.length - 1].representativeImage,
                                    }}
                                    blurRadius={4}
                                />
                                <FindMoreReviewWrapper>
                                    <SearchIcon width={50} height={46} />
                                    <FontWhiteNormalMedium>포토부스 검색으로 더 많은 리뷰 보기</FontWhiteNormalMedium>
                                    <SeeMoreButton onPress={onPressHomeSearch}>
                                        <FontWhiteSmallerMedium>리뷰 더보기</FontWhiteSmallerMedium>
                                        <NextIcon width={20} height={20} />
                                    </SeeMoreButton>
                                </FindMoreReviewWrapper>
                            </FindMoreReviewContainer>
                        </Reviews>
                    </CarouselScrollView>
                </CarouselContainer>
            )}
        </PhotoDumpContainer>
    );
}
