import React from 'react';
import {View} from 'react-native';
import {frameColors} from '../../../styles/base/Variable';
import {FilterDataUpdateProps} from '../../../interfaces/reuse/Filter.interface';
import WhiteCheckImage from '../../../assets/image/filter/white-check.png';
import BlackCheckImage from '../../../assets/image/filter/black-check.png';
import {FilterContentContainer} from '../../../styles/layout/home/filter/Filter.style';
import {
  FrameColorButton,
  EtcFrameColorButton,
  FrameColorCheckIcon,
  EtcFrameColorCheckIcon,
} from '../../../styles/layout/home/filter/FilterFrameColor.style';
import EtcImage from '../../../assets/image/filter/etc-color.png';
import EtcCheckImage from '../../../assets/image/filter/etc-check-color.png';
import {FontWhiteGreySmallerSemibold} from '../../../styles/layout/reuse/text/Text.style';

const availableColors = Object.values(frameColors);

export default function FilterFrameColor({
  filterData,
  setFilterData,
  filterOptionSelect,
}: FilterDataUpdateProps) {
  const handleColorToggle = (color: string) => {
    const isSelected = filterData.frameColor === color;

    setFilterData(prevFilterData => ({
      ...prevFilterData,
      frameColor: isSelected ? '' : color,
    }));

    filterOptionSelect();
  };

  return (
    <View>
      <FontWhiteGreySmallerSemibold>프레임 색상</FontWhiteGreySmallerSemibold>

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

        <EtcFrameColorButton
          isSelected={filterData.frameColor === 'etc'}
          selectedColor={filterData.frameColor}
          onPress={() => handleColorToggle('etc')}>
          <EtcFrameColorCheckIcon
            source={filterData.frameColor === 'etc' ? EtcCheckImage : EtcImage}
          />
        </EtcFrameColorButton>
      </FilterContentContainer>
    </View>
  );
}
