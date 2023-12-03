import React, {useCallback, useEffect, useState} from 'react';
import {
  ReviewDescBottom,
  ReviewDescMiddle,
  ReviewDescTop,
  ReviewDescriptionContainer,
  SeeMoreContainer,
} from '../../styles/layout/review-detail/ReviewDetail.style';
import {
  FontWhiteSmallerThin,
  FontYellowSmallerThinWithLineSpacing,
  FontWhiteNormalThin,
  FontWhiteGreyNormalThin,
} from '../../styles/layout/reuse/text/Text.style';
import FavoirteButton from '../reuse/button/FavoritetButton';
import {
  DateToReviewDateForm,
  TagsArrayToHashTagArrayForm,
} from '../../utils/FormChange';
import {
  NativeSyntheticEvent,
  Platform,
  TextLayoutEventData,
} from 'react-native';
import {ReviewDescriptionProps} from '../../interfaces/ReviewDetail.interface';

export default function ReviewDescription({
  date,
  description,
  hashtag,
}: ReviewDescriptionProps) {
  const [favorite, setFavorite] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [textShown, setTextShown] = useState<boolean>(false);
  const [numLines, setNumLines] = useState<number | undefined>(undefined);
  const platform = Platform.OS;

  /* Press 함수를 2개이상 넣어줄수 없어서 토글 형식으로 구현 */
  const onPressSeeMore = () => {
    setTextShown(!textShown);
  };

  /* Description이 2줄 초과 했을때 최대 라인수 2로 지정 , 더 보기 버튼 출력 */
  const onCheckTextLayout = useCallback(
    (e: NativeSyntheticEvent<TextLayoutEventData>) => {
      if (e.nativeEvent.lines.length > 2 && !textShown) {
        setShowMore(true);
        setNumLines(2);
      }
    },
    [textShown],
  );

  useEffect(() => {
    setNumLines(textShown ? undefined : 2);
  }, [textShown]);

  return (
    <ReviewDescriptionContainer platform={platform}>
      <ReviewDescTop>
        <FontWhiteSmallerThin>
          {DateToReviewDateForm(date)}
        </FontWhiteSmallerThin>
        <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
      </ReviewDescTop>
      <ReviewDescMiddle>
        <FontWhiteNormalThin
          onTextLayout={onCheckTextLayout}
          numberOfLines={numLines}>
          {description}
        </FontWhiteNormalThin>
        {showMore ? (
          <SeeMoreContainer>
            <FontWhiteGreyNormalThin onPress={onPressSeeMore}>
              {textShown ? '줄이기' : '더보기'}
            </FontWhiteGreyNormalThin>
          </SeeMoreContainer>
        ) : null}
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
