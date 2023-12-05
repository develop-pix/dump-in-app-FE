import React from 'react';
import {NormalButtonProps} from '../../../interfaces/reuse/button/Button.interfaces';
import {NormalButtonContainer} from '../../../styles/layout/reuse/button/NormalButton';
import {FontWhiteNormalThick} from '../../../styles/layout/reuse/text/Text.style';

export const NormalButton = ({text, onPress}: NormalButtonProps) => {
  return (
    <NormalButtonContainer onPress={onPress}>
      <FontWhiteNormalThick>{text}</FontWhiteNormalThick>
    </NormalButtonContainer>
  );
};
