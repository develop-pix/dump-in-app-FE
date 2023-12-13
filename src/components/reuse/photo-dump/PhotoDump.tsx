import React, {useRef, useState} from 'react';
import {
  CarouselContainer,
  CarouselScrollView,
  FindMoreReviewContainer,
  FindMoreReviewWrapper,
  NextImage,
  PhotoDumpContainer,
  ReviewBlurImage,
  Reviews,
  SearchImage,
  SeeMoreButton,
  SubTitleContainer,
} from '../../../styles/layout/reuse/photo-dump/PhotoDump.style';
import {
  FontWhiteNormalThin,
  FontWhiteSmallerThickWithLineSpacing,
  FontWhiteSmallerThin,
} from '../../../styles/layout/reuse/text/Text.style';
import {PhotoDumpProps} from '../../../interfaces/reuse/photo-dump/PhotoDump.interface';
import {Animated, Dimensions, NativeScrollEvent} from 'react-native';
import Review from './Review';
import SearchNoData from '../alert/SearchNoData';
import {NormalButton} from '../button/NormalButton';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  NewReviewParamList,
  RootStackParam,
} from '../../../interfaces/NavigationBar';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ScreenName} from '../../../interfaces/NavigationBar';
import SearchIcon from '../../../assets/image/reuse/search.png';
import NextIcon from '../../../assets/image/reuse/next-btn.png';

export default function PhotoDump({reviewData}: PhotoDumpProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const route = useRoute<RouteProp<NewReviewParamList, 'branchType'>>();

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

  /* 현재 review Set */
  const onCarouselScroll = (nativeEvent: NativeScrollEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      slide !== reviewActive ? setReviewActive(slide) : null;
    }
  };

  const onPressRegistrationReview = () => {
    const currentScreen = (
      route.params as {branchID: number; screen: ScreenName}
    ).screen;
    navigation.push('ReviewNew', {
      branchID: route.params.branchID,
      screen: currentScreen,
    });
  };

  const onPressHomeSearch = () => {
    const currentScreen = (
      route.params as {branchID: number; screen: ScreenName}
    ).screen;
    navigation.navigate('HomeSearch', {screen: currentScreen});
  };

  return (
    <PhotoDumpContainer>
      <SubTitleContainer>
        <FontWhiteSmallerThickWithLineSpacing>
          PHOTO DUMP
        </FontWhiteSmallerThickWithLineSpacing>
      </SubTitleContainer>
      {reviewData.length === 0 ? (
        <>
          <SearchNoData
            alertText="등록된 후기가 없습니다."
            recommendText="내 사진을 첫번째로 등록해 보세요!"
          />
          <NormalButton
            text="내 사진 등록하기"
            onPress={onPressRegistrationReview}
          />
        </>
      ) : (
        <CarouselContainer>
          <CarouselScrollView
            onScroll={({nativeEvent}) => onCarouselScroll(nativeEvent)}
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
                    <Animated.View style={{opacity: translateOut}}>
                      <Review
                        reviewID={item.reviewID}
                        reviewImage={item.representativeImage}
                        reviewDescription={item.description}
                        reviewHashtags={item.hashtag}
                      />
                    </Animated.View>
                  ) : item.reviewID === reviewData[reviewActive].reviewID ? (
                    <Animated.View style={{opacity: translateIn}}>
                      <Review
                        reviewID={item.reviewID}
                        reviewImage={item.representativeImage}
                        reviewDescription={item.description}
                        reviewHashtags={item.hashtag}
                      />
                    </Animated.View>
                  ) : (
                    <Animated.View style={{opacity: translateOut}}>
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
                  <SearchImage source={SearchIcon} />
                  <FontWhiteNormalThin>
                    포토부스 검색으로 더 많은 리뷰 보기
                  </FontWhiteNormalThin>
                  <SeeMoreButton onPress={onPressHomeSearch}>
                    <FontWhiteSmallerThin>리뷰 더보기</FontWhiteSmallerThin>
                    <NextImage source={NextIcon} />
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
