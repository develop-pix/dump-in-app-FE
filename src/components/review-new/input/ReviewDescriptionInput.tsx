import React, {useState} from 'react';
import {
  ReviewDescriptionCount,
  ReviewDescriptionInputContainer,
  ReviewDescriptionTextInput,
  ReviewDescriptionTextInputContainer,
} from '../../../styles/layout/review-new/input/ReviewDescriptionInput.style';
import {ReviewInputTitleContainer} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontLightGreySmallestThin,
  FontRedSmallerThickWithLineHeight,
  FontWhiteSmallerThick,
} from '../../../styles/layout/reuse/text/Text.style';
import {colors} from '../../../styles/base/Variable';
import {Platform} from 'react-native';
import {useAppDispatch} from '../../../hooks/redux/store';
import {setDescription} from '../../../hooks/redux/ReviewData';

export default function ReviewDescriptionInput() {
  const [inputCount, setInputCount] = useState<number>(0);
  const platform = Platform.OS;
  const dispatch = useAppDispatch();

  const onChangeText = (e: string) => {
    setInputCount(e.length);
    dispatch(setDescription(e));
  };
  return (
    <ReviewDescriptionInputContainer>
      <ReviewInputTitleContainer>
        <FontWhiteSmallerThick>게시글</FontWhiteSmallerThick>
        <FontRedSmallerThickWithLineHeight>*</FontRedSmallerThickWithLineHeight>
      </ReviewInputTitleContainer>
      <ReviewDescriptionTextInputContainer>
        <ReviewDescriptionTextInput
          platform={platform}
          multiline={true}
          placeholder="이 사진에 어떤 추억이 있었나요?"
          placeholderTextColor={colors.lightgrey}
          onChangeText={onChangeText}
          maxLength={100}
          textAlignVertical="top"
        />
        <ReviewDescriptionCount>
          <FontLightGreySmallestThin>
            {inputCount} / 100
          </FontLightGreySmallestThin>
        </ReviewDescriptionCount>
      </ReviewDescriptionTextInputContainer>
    </ReviewDescriptionInputContainer>
  );
}
