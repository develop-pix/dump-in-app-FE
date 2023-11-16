import React from 'react';
import {FilterButtonProps} from '../../../interfaces/reuse/Button.interfaces';
import {
  FilterButtonContainer,
  FilterButtonText,
} from '../../../styles/layout/reuse/button/FilterButton';

export const FilterButton = ({
  onPress,
  text,
  backgroundColor,
  borderColor,
  textColor,
}: FilterButtonProps) => {
  return (
    <FilterButtonContainer
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      onPress={onPress}>
      <FilterButtonText textColor={textColor}>{text}</FilterButtonText>
    </FilterButtonContainer>
  );
};
