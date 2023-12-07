import React from 'react';
import {FilterDataUpdateProps} from '../../../interfaces/reuse/Filter.interface';
import {
  FilterContentContainer,
  FilterTextButton,
  FilterTextButtonContent,
} from '../../../styles/layout/reuse/filter/Filter.style';
import {View} from 'react-native';
import {FontWhiteGreySmallerThick} from '../../../styles/layout/reuse/text/Text.style';

const availableConcepts = [
  '일상',
  '커플',
  '우정샷',
  '가족',
  '앵글',
  '콜라보',
  '연예인',
  '캐릭터',
  '이달의 프레임',
  '계절',
  '생일',
  '코믹',
  '여행',
  '할로윈',
  '크리스마스',
  '기타',
];

export default function FilterConcept({
  filterData,
  setFilterData,
  filterOptionSelect,
}: FilterDataUpdateProps) {
  const handleConceptToggle = (concept: string) => {
    const isSelected = filterData.concept.includes(concept);
    let conceptArray: string[];

    if (isSelected) {
      conceptArray = filterData.concept.filter(e => e !== concept);
    } else {
      conceptArray = [...filterData.concept, concept];
    }

    setFilterData(prevFilterData => ({
      ...prevFilterData,
      concept: conceptArray,
    }));

    filterOptionSelect();
  };

  return (
    <View>
      <FontWhiteGreySmallerThick>컨셉</FontWhiteGreySmallerThick>

      <FilterContentContainer>
        {availableConcepts.map(conceptOption => {
          const isSelected = filterData.concept.includes(conceptOption);
          return (
            <FilterTextButton
              key={conceptOption}
              isSelected={isSelected}
              onPress={() => handleConceptToggle(conceptOption)}>
              <FilterTextButtonContent isSelected={isSelected}>
                {conceptOption}
              </FilterTextButtonContent>
            </FilterTextButton>
          );
        })}
      </FilterContentContainer>
    </View>
  );
}
