import React from 'react';
import {HomeSelectedFilterOptionProps} from '../../interfaces/Home.interface';
import {
  FilterOptionContainer,
  ColorBox,
  FilterOptionTextBox,
  FilterOptionText,
} from '../../styles/layout/home/HomeSelectedFilterOption.style';

export default function HomeSelectedFilterOption({
  filterData,
}: HomeSelectedFilterOptionProps) {
  return (
    <FilterOptionContainer>
      {Object.entries(filterData).map(([key, value]) => {
        if (key === 'frameColor' && value) {
          return <ColorBox key={key} backgroundColor={value} />;
        }

        if (key === 'party' && value > 0) {
          return (
            <FilterOptionTextBox key={key}>
              <FilterOptionText>
                {value == 5 ? '5+' : value.toString()}
              </FilterOptionText>
            </FilterOptionTextBox>
          );
        }

        if (key === 'concept' && value.length > 0) {
          return (value as string[]).map((concept: string, index: number) => (
            <FilterOptionTextBox key={`${key}-${index}`}>
              <FilterOptionText>{concept}</FilterOptionText>
            </FilterOptionTextBox>
          ));
        }

        if (value && value.length > 0) {
          return (
            <FilterOptionTextBox key={key}>
              <FilterOptionText>{value}</FilterOptionText>
            </FilterOptionTextBox>
          );
        }
      })}
    </FilterOptionContainer>
  );
}
