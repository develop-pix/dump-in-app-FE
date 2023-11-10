import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {colors} from '../../../styles/base/Variable';
import {FilterDataUpdateProps} from '../../../interfaces/Filter.interface';

const availablecameraShots = [
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
}: FilterDataUpdateProps) {
  const handleCameraShotToggle = (cameraShot: string) => {
    const isSelected = filterData.cameraShot === cameraShot;

    setFilterData(prevFilterData => ({
      ...prevFilterData,
      cameraShot: isSelected ? '' : cameraShot,
    }));
  };

  return (
    <View>
      <Text
        style={{
          color: colors.first_grey,
          fontSize: 16,
          marginBottom: 10,
        }}>
        카메라 샷
      </Text>
      <View style={styles.cameraShotContainer}>
        {availablecameraShots.map(cameraShotOption => (
          <TouchableOpacity
            key={cameraShotOption.name}
            style={[styles.cameraShotButton]}
            onPress={() => handleCameraShotToggle(cameraShotOption.name)}>
            <Image
              source={cameraShotOption.image}
              style={[
                styles.cameraShotImage,
                {
                  opacity:
                    filterData.cameraShot !== cameraShotOption.name ? 0.5 : 1,
                  borderColor:
                    filterData.cameraShot === cameraShotOption.name
                      ? 'white'
                      : 'transparent',
                },
              ]}
            />
            <Text
              style={[
                styles.cameraShotText,
                {
                  color:
                    filterData.cameraShot === cameraShotOption.name
                      ? 'white'
                      : colors.first_grey,
                },
              ]}>
              {cameraShotOption.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraShotContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  cameraShotButton: {
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  cameraShotImage: {
    width: 80,
    height: 100,
    marginBottom: 5,
    borderWidth: 2,
    borderRadius: 10,
  },
  cameraShotText: {
    fontSize: 14,
  },
});
