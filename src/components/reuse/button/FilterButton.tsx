import React from 'react';
import {FilterButtonProps} from '../../../interfaces/reuse/button/Button.interfaces';
import {
  FilterButtonContainer,
  FilterButtonText,
} from '../../../styles/layout/reuse/button/FilterButton.style';

export const FilterButton = ({
  onPress,
  text,
  backgroundColor,
  borderColor,
  textColor,
  disabled,
}: FilterButtonProps) => {
  return (
    <FilterButtonContainer
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      onPress={onPress}
      disabled={disabled} // 비활성화 상태 설정
      style={{opacity: disabled ? 0.5 : 1}} // 버튼 비활성화 시 투명도 변경
    >
      <FilterButtonText textColor={textColor}>{text}</FilterButtonText>
    </FilterButtonContainer>
  );
};
