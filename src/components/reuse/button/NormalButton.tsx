import React from 'react';
import {NormalButtonProps} from '../../../interfaces/reuse/button/Button.interfaces';
import {
  NormalButtonContainer,
  NormalButtonText,
} from '../../../styles/layout/reuse/button/NormalButton';

export const NormalButton = ({text, onPress}: NormalButtonProps) => {
  return (
    <NormalButtonContainer onPress={onPress}>
      <NormalButtonText>{text}</NormalButtonText>
    </NormalButtonContainer>
  );
};
