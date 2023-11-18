import React from 'react';
import {
  ReviewContainer,
  ReviewDescription,
  ReviewDescriptionContainer,
  ReviewHastags,
  ReviewImage,
} from '../../../styles/layout/reuse/photo-dump/Review.style';
import {ReviewProps} from '../../../interfaces/reuse/photo-dump/Review.interface';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../styles/base/Variable';
import {
  HashtagsText,
  ReviewDescText,
} from '../../../styles/layout/reuse/text/Text.style';
import {TagsArrayToHashTagArrayForm} from '../../../utils/FormChange';

export default function Review({
  reviewImage,
  reviewDescription,
  reviewHashtags,
}: ReviewProps) {
  return (
    <ReviewContainer>
      <ReviewImage source={{uri: reviewImage}} />
      <LinearGradient
        colors={['transparent', colors.black]}
        locations={[0.1, 1]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 130,
        }}
      />

      <ReviewDescriptionContainer>
        <ReviewDescription>
          <ReviewDescText>{reviewDescription}</ReviewDescText>
        </ReviewDescription>
        <ReviewHastags>
          <HashtagsText>
            {TagsArrayToHashTagArrayForm(reviewHashtags).join(' ')}
          </HashtagsText>
        </ReviewHastags>
      </ReviewDescriptionContainer>
    </ReviewContainer>
  );
}
