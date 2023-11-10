import React from 'react';
import {FilterDataUpdateProps} from '../../../interfaces/reuse/Filter.interface';
import {
  FilterTitle,
  FilterContentContainer,
  FilterTextButton,
  FilterTextButtonContent,
} from '../../../styles/layout/reuse/filter/Filter';
import {View} from 'react-native';

const availableLocations = [
  '서울',
  '경기',
  '인천',
  '대전',
  '충북',
  '충남',
  '강원',
  '대구',
  '경북',
  '경남',
  '울산',
  '부산',
  '광주',
  '전북',
  '전남',
  '제주',
];

export default function FilterLocation({
  filterData,
  setFilterData,
}: FilterDataUpdateProps) {
  const handleLocationToggle = (location: string) => {
    const isSelected = filterData.geolocation === location;

    setFilterData(prevFilterData => ({
      ...prevFilterData,
      geolocation: isSelected ? '' : location,
    }));
  };

  return (
    <View>
      <FilterTitle>지역</FilterTitle>

      <FilterContentContainer>
        {availableLocations.map(locationOption => {
          const isSelected = filterData.geolocation === locationOption;
          return (
            <FilterTextButton
              key={locationOption}
              isSelected={isSelected}
              onPress={() => handleLocationToggle(locationOption)}>
              <FilterTextButtonContent isSelected={isSelected}>
                {locationOption}
              </FilterTextButtonContent>
            </FilterTextButton>
          );
        })}
      </FilterContentContainer>
    </View>
  );
}
