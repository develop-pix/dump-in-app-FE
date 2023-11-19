import React from 'react';
import {ReviewRegistrationButtonProps} from '../../../interfaces/reuse/button/Button.interfaces';
import {
  ReviewRegistrationButtonContainer,
  ReviewRegistrationButtonText,
} from '../../../styles/layout/reuse/button/ReviewRegistrationButton.style';

export const ReviewRegistrationButton = ({
  onPress,
}: ReviewRegistrationButtonProps) => {
  return (
    <ReviewRegistrationButtonContainer onPress={onPress}>
      <ReviewRegistrationButtonText>
        내 사진 등록하기
      </ReviewRegistrationButtonText>
    </ReviewRegistrationButtonContainer>
  );
};
