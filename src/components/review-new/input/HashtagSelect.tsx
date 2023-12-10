import React from 'react';
import {
  HashtagButton,
  HashtagSelectContainer,
  HashtagSelectWrapper,
} from '../../../styles/layout/review-new/input/HashtagSelect.style';
import {
  ReviewErrorContainer,
  ReviewInputTitleContainer,
} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontBlackSmallerThick,
  FontLightGreySmallerThin,
  FontRedNormalThin,
  FontWhiteNormalThin,
  FontYellowSmallestThin,
} from '../../../styles/layout/reuse/text/Text.style';
import {useAppDispatch} from '../../../hooks/redux/store';
import {setHashtag} from '../../../hooks/redux/ReviewData';
import {HashtagSelectProps} from '../../../interfaces/ReviewNew.interface';

export default function HashtagSelect({
  hashtags,
  errorData,
}: HashtagSelectProps) {
  const dispatch = useAppDispatch();
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

  // 컨셉 선택시 dispatch , 최대 5개 까지 선택 가능
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
        <FontWhiteNormalThin>컨셉</FontWhiteNormalThin>
        <FontRedNormalThin>*</FontRedNormalThin>
        {errorData.map(data => {
          return data.InputName === 'hashtags' ? (
            <ReviewErrorContainer key={data.InputName}>
              <FontYellowSmallestThin>
                필수 입력 항목입니다.
              </FontYellowSmallestThin>
            </ReviewErrorContainer>
          ) : null;
        })}
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
