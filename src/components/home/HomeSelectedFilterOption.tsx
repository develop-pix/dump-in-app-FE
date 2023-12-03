import React from 'react';
import {HomeSelectedFilterOptionProps} from '../../interfaces/Home.interface';
import {
  FilterOptionContainer,
  ColorBox,
  FilterOptionTextBox,
} from '../../styles/layout/home/HomeSelectedFilterOption.style';
import {FontWhiteSmallestThick} from '../../styles/layout/reuse/text/Text.style';

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
              <FontWhiteSmallestThick>
                {value === 5 ? '5+' : value.toString()}
              </FontWhiteSmallestThick>
            </FilterOptionTextBox>
          );
        }

        if (key === 'concept' && value.length > 0) {
          return (value as string[]).map((concept: string, index: number) => (
            <FilterOptionTextBox key={`${key}-${index}`}>
              <FontWhiteSmallestThick>{concept}</FontWhiteSmallestThick>
            </FilterOptionTextBox>
          ));
        }

        if (value && value.length > 0) {
          return (
            <FilterOptionTextBox key={key}>
              <FontWhiteSmallestThick>{value}</FontWhiteSmallestThick>
            </FilterOptionTextBox>
          );
        }
      })}
    </FilterOptionContainer>
  );
}
