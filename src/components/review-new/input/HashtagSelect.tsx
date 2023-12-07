import React from 'react';
import {
  HashtagButton,
  HashtagSelectContainer,
  HashtagSelectWrapper,
} from '../../../styles/layout/review-new/input/HashtagSelect.style';
import {ReviewInputTitleContainer} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontBlackSmallerThick,
  FontLightGreySmallerThin,
  FontRedSmallerThickWithLineHeight,
  FontWhiteSmallerThick,
} from '../../../styles/layout/reuse/text/Text.style';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux/store';
import {setHashtag} from '../../../hooks/redux/ReviewData';

export default function HashtagSelect() {
  const dispatch = useAppDispatch();
  const hashtags = useAppSelector(state => state.reviewData).hashtag;
  const availableHashtag = [
    '일상',
    '커플',
    '우정샷',
    '가족',
    '앵글',
    '콜라보',
    '연예인',
    '캐릭터',
    '이달의 프레임',
    '계절',
    '생일',
    '코믹',
    '여행',
    '할로윈',
    '크리스마스',
    '기타',
  ];

  const onPressHashtag = (tag: string) => {
    if (hashtags.includes(tag)) {
      const popHashtag = hashtags.filter(index => index !== tag);
      dispatch(setHashtag(popHashtag));
      return;
    }
    if (hashtags.length < 5) {
      dispatch(setHashtag([...hashtags, tag]));
    }
  };

  return (
    <HashtagSelectContainer>
      <ReviewInputTitleContainer>
        <FontWhiteSmallerThick>컨셉</FontWhiteSmallerThick>
        <FontRedSmallerThickWithLineHeight>*</FontRedSmallerThickWithLineHeight>
      </ReviewInputTitleContainer>
      <HashtagSelectWrapper>
        {availableHashtag.map(hashtag => {
          return (
            <HashtagButton
              key={hashtag}
              hashtagOption={hashtag}
              isSelected={hashtags}
              onPress={() => onPressHashtag(hashtag)}>
              {hashtags.includes(hashtag) ? (
                <FontBlackSmallerThick>{hashtag}</FontBlackSmallerThick>
              ) : (
                <FontLightGreySmallerThin>{hashtag}</FontLightGreySmallerThin>
              )}
            </HashtagButton>
          );
        })}
      </HashtagSelectWrapper>
    </HashtagSelectContainer>
  );
}
