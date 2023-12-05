import React, {useState} from 'react';
import {
  ReviewDescBottom,
  ReviewDescMiddle,
  ReviewDescTop,
  ReviewDescriptionContainer,
  ReviewDescriptionTouchableContainer,
} from '../../styles/layout/review-detail/ReviewDetail.style';
import {
  FontWhiteSmallerThin,
  FontYellowSmallerThinWithLineSpacing,
  FontWhiteNormalThin,
} from '../../styles/layout/reuse/text/Text.style';
import FavoirteButton from '../reuse/button/FavoritetButton';
import {
  DateToReviewDateForm,
  TagsArrayToHashTagArrayForm,
} from '../../utils/FormChange';
import {Platform} from 'react-native';
import {ReviewDescriptionProps} from '../../interfaces/ReviewDetail.interface';

export default function ReviewDescription({
  date,
  description,
  hashtag,
}: ReviewDescriptionProps) {
  const [favorite, setFavorite] = useState<boolean>(false);
  const [numLines, setNumLines] = useState<number>(2);
  const platform = Platform.OS;

  /* Press 함수를 2개이상 넣어줄수 없어서 토글 형식으로 구현 */
  const onPressSeeMore = () => {
    if (numLines) {
      setNumLines(0);
    } else {
      setNumLines(2);
    }
  };

  return (
    <ReviewDescriptionContainer platform={platform}>
      <ReviewDescTop>
        <FontWhiteSmallerThin>
          {DateToReviewDateForm(date)}
        </FontWhiteSmallerThin>
        <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
      </ReviewDescTop>
      <ReviewDescMiddle>
        <ReviewDescriptionTouchableContainer
          onPress={onPressSeeMore}
          activeOpacity={0.8}>
          <FontWhiteNormalThin numberOfLines={numLines}>
            {description}
          </FontWhiteNormalThin>
        </ReviewDescriptionTouchableContainer>
      </ReviewDescMiddle>
      <ReviewDescBottom>
        {TagsArrayToHashTagArrayForm(hashtag).map(tag => (
          <FontYellowSmallerThinWithLineSpacing key={tag}>
            {tag}
          </FontYellowSmallerThinWithLineSpacing>
        ))}
      </ReviewDescBottom>
    </ReviewDescriptionContainer>
  );
}
