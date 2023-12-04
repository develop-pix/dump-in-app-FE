import React from 'react';
import {FilterDataUpdateProps} from '../../../interfaces/reuse/Filter.interface';
import {FilterContentContainer} from '../../../styles/layout/reuse/filter/Filter.style';
import {
  CameraShotImageContainer,
  CameraShotImage,
  CameraShotImageText,
} from '../../../styles/layout/reuse/filter/FilterCameraShot.style';
import {View} from 'react-native';
import {FontWhiteGreySmallestThick} from '../../../styles/layout/reuse/text/Text.style';

const availableCameraShots = [
  {
    name: '클로즈업',
    image: require('../../../assets/image/filter/filter-close-up.png'),
  },
  {
    name: '상반신',
    image: require('../../../assets/image/filter/filter-bust.png'),
  },
  {
    name: '무릎',
    image: require('../../../assets/image/filter/filter-knee.png'),
  },
  {
    name: '전신',
    image: require('../../../assets/image/filter/filter-whole-body.png'),
  },
];

export default function FilterCameraShot({
  filterData,
  setFilterData,
  filterOptionSelect,
}: FilterDataUpdateProps) {
  const handleCameraShotToggle = (cameraShot: string) => {
    const isSelected = filterData.cameraShot === cameraShot;

    setFilterData(prevFilterData => ({
      ...prevFilterData,
      cameraShot: isSelected ? '' : cameraShot,
    }));

    filterOptionSelect();
  };

  return (
    <View>
      <FontWhiteGreySmallestThick>카메라 샷</FontWhiteGreySmallestThick>

      <FilterContentContainer>
        {availableCameraShots.map(cameraShotOption => {
          const isSelected = filterData.cameraShot === cameraShotOption.name;

          return (
            <CameraShotImageContainer
              isSelected={isSelected}
              key={cameraShotOption.name}
              onPress={() => handleCameraShotToggle(cameraShotOption.name)}>
              <CameraShotImage
                isSelected={isSelected}
                cameraShot={filterData.cameraShot}
                source={cameraShotOption.image}
              />
              <CameraShotImageText isSelected={isSelected}>
                {cameraShotOption.name}
              </CameraShotImageText>
            </CameraShotImageContainer>
          );
        })}
      </FilterContentContainer>
    </View>
  );
}
