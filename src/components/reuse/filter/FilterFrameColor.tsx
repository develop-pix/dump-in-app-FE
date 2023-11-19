import React from 'react';
import {View} from 'react-native';
import {frameColors} from '../../../styles/base/Variable';
import {FilterDataUpdateProps} from '../../../interfaces/reuse/Filter.interface';
import WhiteCheckImage from '../../../assets/image/filter/white-check.png';
import BlackCheckImage from '../../../assets/image/filter/black-check.png';
import {
  FilterTitle,
  FilterContentContainer,
} from '../../../styles/layout/reuse/filter/Filter.style';
import {
  FrameColorButton,
  FrameColorCheckIcon,
} from '../../../styles/layout/reuse/filter/FilterFrameColor.style';

// 무지개 색상은 기타색상을 의미? -> 기타 색상을 의미하는 데이터값(string)을 따로 만들어서 서버로 보내줘야함
const availableColors = Object.values(frameColors);

export default function FilterFrameColor({
  filterData,
  setFilterData,
}: FilterDataUpdateProps) {
  const handleColorToggle = (color: string) => {
    const isSelected = filterData.frameColor === color;

    setFilterData(prevFilterData => ({
      ...prevFilterData,
      frameColor: isSelected ? '' : color,
    }));
  };

  return (
    <View>
      <FilterTitle>프레임 색상</FilterTitle>

      <FilterContentContainer>
        {availableColors.map(colorOption => {
          const isSelected = filterData.frameColor === colorOption;

          return (
            <FrameColorButton
              key={colorOption}
              isSelected={isSelected}
              colorOption={colorOption}
              selectedColor={filterData.frameColor}
              onPress={() => handleColorToggle(colorOption)}>
              {isSelected && (
                <FrameColorCheckIcon
                  source={
                    colorOption === frameColors.white
                      ? BlackCheckImage
                      : WhiteCheckImage
                  }
                />
              )}
            </FrameColorButton>
          );
        })}
      </FilterContentContainer>
    </View>
  );
}
