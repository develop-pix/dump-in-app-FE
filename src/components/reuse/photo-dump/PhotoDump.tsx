import React, {useState} from 'react';
import {
  CarouselContainer,
  PhotoCarusel,
  PhotoDumpContainer,
  ReviewWrapper,
  Reviews,
  SubTitleContainer,
} from '../../../styles/layout/reuse/photo-dump/PhotoDump.style';
import {SubTitleText} from '../../../styles/layout/reuse/text/Text.style';
import {PhotoDumpProps} from '../../../interfaces/reuse/photo-dump/PhotoDump.interface';
import {NativeScrollEvent} from 'react-native';
import Review from './Review';

export default function PhotoDump({reviewData}: PhotoDumpProps) {
  const [reviewActive, setReviewActive] = useState<number>(0);

  const onCarouselScroll = (nativeEvent: NativeScrollEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      slide !== reviewActive ? setReviewActive(slide) : null;
    }
  };
  return (
    <PhotoDumpContainer>
      <SubTitleContainer>
        <SubTitleText>PHOTO DUMP</SubTitleText>
      </SubTitleContainer>
      <CarouselContainer>
        <PhotoCarusel
          onScroll={({nativeEvent}) => onCarouselScroll(nativeEvent)}
          scrollEventThrottle={0}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal>
          <ReviewWrapper>
            {reviewData.map(review => (
              <Reviews key={review.reviewID}>
                <Review
                  reviewImage={review.representativeImage}
                  reviewDescription={review.description}
                  reviewHashtags={review.hashtag}
                />
              </Reviews>
            ))}
          </ReviewWrapper>
        </PhotoCarusel>
      </CarouselContainer>
    </PhotoDumpContainer>
  );
}
