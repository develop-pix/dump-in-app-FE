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
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';

export default function Review({
  reviewID,
  reviewImage,
  reviewDescription,
  reviewHashtags,
}: ReviewProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const onPressReview = () => {
    if (!isFocused) {
      return;
    }
    navigation.push('ReviewDetail', {reviewID: reviewID});
  };

  return (
    <ReviewContainer activeOpacity={0.9} onPress={onPressReview}>
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
          {TagsArrayToHashTagArrayForm(reviewHashtags).map(tag => (
            <HashtagsText key={tag}>{tag}</HashtagsText>
          ))}
        </ReviewHastags>
      </ReviewDescriptionContainer>
    </ReviewContainer>
  );
}
