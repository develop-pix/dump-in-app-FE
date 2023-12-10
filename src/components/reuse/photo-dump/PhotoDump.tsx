import React, {useRef, useState} from 'react';
import {
  CarouselContainer,
  PhotoDumpContainer,
  Reviews,
  SubTitleContainer,
} from '../../../styles/layout/reuse/photo-dump/PhotoDump.style';
import {FontWhiteSmallerThickWithLineSpacing} from '../../../styles/layout/reuse/text/Text.style';
import {
  PhotoDumpProps,
  ReviewData,
} from '../../../interfaces/reuse/photo-dump/PhotoDump.interface';
import {
  Animated,
  Dimensions,
  FlatList,
  ListRenderItem,
  NativeScrollEvent,
} from 'react-native';
import Review from './Review';
import GetMoreReview from './GetMoreReview';
import SearchNoData from '../alert/SearchNoData';
import {NormalButton} from '../button/NormalButton';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  NewReviewParamList,
  RootStackParam,
} from '../../../interfaces/NavigationBar';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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

  /* 스크롤 끝에 도착했을때, 데이터 Get 해야함, API 필요*/
  const onEndReached = () => {
    //const reviewData = await fetchData();

    console.log('get');
  };

  const onPressRegistrationReview = () => {
    navigation.push('ReviewNew', {branchID: route.params.branchID});
  };

  /* renderItem 안에서 선언해줄경우 TypeError 발생 (타입명시를 위해 따로 선언) */
  const renderItems: ListRenderItem<ReviewData> = ({
    item,
  }: {
    item: ReviewData;
  }) => (
    <Reviews key={item.reviewID}>
      {item.reviewID === reviewData[reviewActive].reviewID ? (
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
          <FlatList
            data={reviewData}
            keyExtractor={item => item.reviewID.toString()}
            onScroll={({nativeEvent}) => onCarouselScroll(nativeEvent)}
            scrollEventThrottle={0}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            renderItem={renderItems}
            onEndReached={onEndReached}
            onEndReachedThreshold={1}
            ListFooterComponent={<GetMoreReview />}
            automaticallyAdjustContentInsets={false}
            snapToAlignment="start"
            decelerationRate="fast"
            snapToInterval={pageWidth + gap}
            contentContainerStyle={{
              paddingHorizontal: offset + gap / 2,
            }}
          />
        </CarouselContainer>
      )}
    </PhotoDumpContainer>
  );
}
