import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {colors, frameColors} from '../../../styles/base/Variable';
import {FilterDataUpdateProps} from '../../../interfaces/Filter.interface';
import WhiteCheckImage from '../../../assets/image/filter/white-check.png';
import BlackCheckImage from '../../../assets/image/filter/black-check.png';
import {
  FilterTitle,
  FilterContentContainer,
} from '../../../styles/layout/reuse/Filter';

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
        {availableColors.map(colorOption => (
          <TouchableOpacity
            key={colorOption}
            style={[
              styles.colorButton,
              {
                backgroundColor: colorOption,
                borderColor:
                  filterData.frameColor === colorOption
                    ? 'white'
                    : 'transparent',
                borderWidth: 1,
                opacity:
                  filterData.frameColor && filterData.frameColor !== colorOption
                    ? 0.3
                    : 1,
              },
            ]}
            onPress={() => handleColorToggle(colorOption)}>
            {filterData.frameColor === colorOption && (
              <Image
                source={
                  colorOption === frameColors.white
                    ? BlackCheckImage
                    : WhiteCheckImage
                }
                style={styles.checkIcon}
              />
            )}
          </TouchableOpacity>
        ))}
      </FilterContentContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  colorButton: {
    width: 36,
    height: 36,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  checkIcon: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: '50%',
    left: '50%',
    transform: [{translateX: -12}, {translateY: -12}],
  },
});
