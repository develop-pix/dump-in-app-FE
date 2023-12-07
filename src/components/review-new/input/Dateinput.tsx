import React from 'react';
import {ReviewDescriptionTextInputContainer} from '../../../styles/layout/review-new/input/ReviewDescriptionInput.style';
import {ReviewInputTitleContainer} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontRedSmallerThickWithLineHeight,
  FontWhiteSmallerThick,
} from '../../../styles/layout/reuse/text/Text.style';
import {
  DateInputContainer,
  DateInputWrapper,
  DateTextInput,
} from '../../../styles/layout/review-new/input/DateInput.style';
import {colors} from '../../../styles/base/Variable';

export default function DateInput({}) {
  return (
    <DateInputContainer>
      <ReviewInputTitleContainer>
        <FontWhiteSmallerThick>날짜</FontWhiteSmallerThick>
        <FontRedSmallerThickWithLineHeight>*</FontRedSmallerThickWithLineHeight>
      </ReviewInputTitleContainer>
      <ReviewDescriptionTextInputContainer>
        <DateInputWrapper>
          <DateTextInput
            placeholder="날짜를 선택해주세요."
            placeholderTextColor={colors.lightgrey}
            selectTextOnFocus={false}
          />
        </DateInputWrapper>
      </ReviewDescriptionTextInputContainer>
    </DateInputContainer>
  );
}
