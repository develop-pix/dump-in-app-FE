import React from 'react';
import {FilterDataUpdateProps} from '../../../interfaces/Filter.interface';
import {
  FilterTitle,
  FilterContentContainer,
  FilterTextButton,
  FilterTextButtonContent,
} from '../../../styles/layout/filter/Filter';
import {View} from 'react-native';

const availableParty = [1, 2, 3, 4];

export default function FilterParty({
  filterData,
  setFilterData,
}: FilterDataUpdateProps) {
  const handlePartyToggle = (party: number) => {
    const isSelected = filterData.party === party;

    setFilterData(prevFilterData => ({
      ...prevFilterData,
      party: isSelected ? 0 : party,
    }));
  };

  return (
    <View>
      <FilterTitle>인원</FilterTitle>

      <FilterContentContainer>
        {availableParty.map(partyOption => {
          const isSelected = filterData.party === partyOption;
          return (
            <FilterTextButton
              key={partyOption}
              isSelected={isSelected}
              buttonWidth={36}
              onPress={() => handlePartyToggle(partyOption)}>
              <FilterTextButtonContent isSelected={isSelected}>
                {partyOption}
              </FilterTextButtonContent>
            </FilterTextButton>
          );
        })}

        <FilterTextButton
          isSelected={filterData.party === 5}
          buttonWidth={44} // 피그마대로 40px를 가로로 주면 공간이 부족한 현상이 나오는데 해결해야함
          onPress={() => handlePartyToggle(5)}>
          <FilterTextButtonContent isSelected={filterData.party === 5}>
            5+
          </FilterTextButtonContent>
        </FilterTextButton>
      </FilterContentContainer>
    </View>
  );
}
