import React from 'react';
import {FilterDataUpdateProps} from '../../interfaces/Filter.interface';
import {
  LocationContainer,
  LocationText,
  LocationBody,
  LocationButton,
  LocationButtonText,
} from '../../styles/layout/Filter/FilterLocation';

const locations = [
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
    <LocationContainer>
      <LocationText>지역</LocationText>
      <LocationBody>
        {locations.map(location => {
          const isSelected = filterData.geolocation === location;
          return (
            <LocationButton
              key={location}
              isSelected={isSelected}
              onPress={() => handleLocationToggle(location)}>
              <LocationButtonText isSelected={isSelected}>
                {location}
              </LocationButtonText>
            </LocationButton>
          );
        })}
      </LocationBody>
    </LocationContainer>
  );
}
