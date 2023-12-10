import React, {useState} from 'react';
import {
  ReviewDescriptionCount,
  ReviewDescriptionInputContainer,
  ReviewDescriptionTextInput,
  ReviewDescriptionTextInputContainer,
} from '../../../styles/layout/review-new/input/ReviewDescriptionInput.style';
import {
  ReviewErrorContainer,
  ReviewInputTitleContainer,
} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontLightGreySmallestThin,
  FontRedNormalThin,
  FontWhiteNormalThin,
  FontYellowSmallestThin,
} from '../../../styles/layout/reuse/text/Text.style';
import {colors} from '../../../styles/base/Variable';
import {Platform} from 'react-native';
import {useAppDispatch} from '../../../hooks/redux/store';
import {setDescription} from '../../../hooks/redux/ReviewData';
import {ReviewDescriptionProps} from '../../../interfaces/ReviewNew.interface';

export default function ReviewDescriptionInput({
  description,
  errorData,
}: ReviewDescriptionProps) {
  // 위치 선택 후 돌아왔을때 게시글 길이를 유지하기 위함
  const [inputCount, setInputCount] = useState<number>(
    description === null ? 0 : description.length,
  );
  const platform = Platform.OS;
  const dispatch = useAppDispatch();

  // 게시글이 변경 될때 글자길이 count 및 문자열 dispatch
  const onChangeText = (e: string) => {
    setInputCount(e.length);
    dispatch(setDescription(e));
  };

  return (
    <ReviewDescriptionInputContainer>
      <ReviewInputTitleContainer>
        <FontWhiteNormalThin>게시글</FontWhiteNormalThin>
        <FontRedNormalThin>*</FontRedNormalThin>
        {errorData.map(data => {
          return data.InputName === 'description' ? (
            <ReviewErrorContainer key={data.InputName}>
              <FontYellowSmallestThin>
                필수 입력 항목입니다.
              </FontYellowSmallestThin>
            </ReviewErrorContainer>
          ) : null;
        })}
      </ReviewInputTitleContainer>
      <ReviewDescriptionTextInputContainer>
        <ReviewDescriptionTextInput
          platform={platform}
          multiline={true}
          placeholder="이 사진에 어떤 추억이 있었나요?"
          placeholderTextColor={colors.lightgrey}
          onChangeText={onChangeText}
          maxLength={100}
          value={description ? description : undefined}
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