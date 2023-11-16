import React from 'react';
import {HomeSelectedFilterOptionProps} from '../../interfaces/Home.interface';
import {
  FilterOptionContainer,
  ColorBox,
  TextBox,
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
            <TextBox key={key}>
              <FilterOptionText>
                {value == 5 ? '5+' : value.toString()}
              </FilterOptionText>
            </TextBox>
          );
        }

        if (key === 'concept' && value.length > 0) {
          return (value as string[]).map((concept: string, index: number) => (
            <TextBox key={`${key}-${index}`}>
              <FilterOptionText>{concept}</FilterOptionText>
            </TextBox>
          ));
        }

        if (value && value.length > 0) {
          return (
            <TextBox key={key}>
              <FilterOptionText>{value}</FilterOptionText>
            </TextBox>
          );
        }
      })}
    </FilterOptionContainer>
  );
}
