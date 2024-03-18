import { useRef, useState } from 'react';
import { Animated, Dimensions, NativeScrollEvent } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import NextIcon from 'assets/image/icon/btn_next.svg';
import SearchIcon from 'assets/image/icon/search.svg';
import SearchNoData from 'components/reuse/alert/SearchNoData';
import { NormalButton } from 'components/reuse/button/NormalButton';
import { setBranchID } from 'hooks/redux/reviewEditSlice';
import { LocationStackScreenProps } from 'interfaces/Navigation.interface';
import { PhotoDumpProps } from 'interfaces/reuse/photo-dump/PhotoDump.interface';
import { colors } from 'styles/base/Variable';
import {
    CarouselContainer,
    CarouselScrollView,
    FindMoreReviewContainer,
    FindMoreReviewTextContainer,
    FindMoreReviewTextWrapper,
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
    const dispatch = useDispatch();

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
        dispatch(setBranchID(route.params.branchID));
        navigation.navigate('AddReviewModal');
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
                        {reviewData.map(reviewItem => {
                            return (
                                <Reviews key={reviewItem.id}>
                                    {reviewData[reviewActive] === undefined ? (
                                        <Animated.View style={{ opacity: translateOut }}>
                                            <Review reviewItem={reviewItem} />
                                        </Animated.View>
                                    ) : reviewItem.id === reviewData[reviewActive].id ? (
                                        <Animated.View style={{ opacity: translateIn }}>
                                            <Review reviewItem={reviewItem} />
                                        </Animated.View>
                                    ) : (
                                        <Animated.View style={{ opacity: translateOut }}>
                                            <Review reviewItem={reviewItem} />
                                        </Animated.View>
                                    )}
                                </Reviews>
                            );
                        })}
                        <Reviews>
                            <FindMoreReviewContainer>
                                <ReviewBlurImage
                                    source={{
                                        uri: reviewData[reviewData.length - 1].mainThumbnailImageUrl,
                                    }}
                                    blurRadius={4}
                                />
                                <FindMoreReviewWrapper>
                                    <FindMoreReviewTextContainer>
                                        <SearchIcon width={50} height={46} />
                                        <FindMoreReviewTextWrapper>
                                            <FontWhiteNormalMedium>포토부스 검색으로</FontWhiteNormalMedium>
                                            <FontWhiteNormalMedium>더 많은 리뷰 보기</FontWhiteNormalMedium>
                                        </FindMoreReviewTextWrapper>
                                    </FindMoreReviewTextContainer>
                                    <SeeMoreButton onPress={onPressHomeSearch}>
                                        <FontWhiteSmallerMedium>리뷰 더보기</FontWhiteSmallerMedium>
                                        <NextIcon width={20} height={20} color={colors.white} />
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
