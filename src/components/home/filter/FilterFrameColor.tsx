import React from 'react';
import {View} from 'react-native';
import {frameColors} from '../../../styles/base/Variable';
import {FilterDataUpdateProps} from '../../../interfaces/reuse/Filter.interface';
import {FilterContentContainer} from '../../../styles/layout/home/filter/Filter.style';
import {
  FrameColorButton,
  EtcFrameColorButton,
} from '../../../styles/layout/home/filter/FilterFrameColor.style';
import WhiteCheckIcon from '../../../assets/image/icon/check_white.svg';
import BlackCheckIcon from '../../../assets/image/icon/check_black.svg';
import EtcImage from '../../../assets/image/icon/frame_etc.svg';
import EtcCheckImage from '../../../assets/image/icon/check_frame_etc.svg';
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
              {isSelected &&
                (colorOption === frameColors.white ? (
                  <BlackCheckIcon width={24} height={24} />
                ) : (
                  <WhiteCheckIcon width={24} height={24} />
                ))}
            </FrameColorButton>
          );
        })}

        <EtcFrameColorButton
          isSelected={filterData.frameColor === 'etc'}
          selectedColor={filterData.frameColor}
          onPress={() => handleColorToggle('etc')}>
          {filterData.frameColor === 'etc' ? (
            <EtcCheckImage width={36} height={36} />
          ) : (
            <EtcImage width={36} height={36} />
          )}
        </EtcFrameColorButton>
      </FilterContentContainer>
    </View>
  );
}
