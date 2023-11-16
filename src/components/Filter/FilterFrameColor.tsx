import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {colors} from '../../styles/base/Variable';
import {FilterDataUpdateProps} from '../../interfaces/Filter.interface';
import WhiteCheckImage from '../../assets/image/filter/white-check.png';
import BlackCheckImage from '../../assets/image/filter/black-check.png';

// 색상 변수 따로 빼서 선언해줘야함. 피그마 색상대로 하려면 #xxxxx 이런식으로 선언해야할듯
const availableColors = [
  'black',
  'white',
  'blue',
  'red',
  'green',
  'yellow',
  'purple',
  'grey',
];

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
      <Text
        style={{
          color: colors.first_grey,
          fontSize: 16,
          marginBottom: 10,
        }}>
        프레임 색상
      </Text>
      <View style={styles.colorContainer}>
        {availableColors.map(color => (
          <TouchableOpacity
            key={color}
            style={[
              styles.colorButton,
              {
                backgroundColor: color,
                borderColor:
                  filterData.frameColor === color ? 'white' : 'transparent',
                borderWidth: 1,
                opacity:
                  filterData.frameColor && filterData.frameColor !== color
                    ? 0.3
                    : 1,
              },
            ]}
            onPress={() => handleColorToggle(color)}>
            {filterData.frameColor === color && (
              <Image
                source={color === 'white' ? BlackCheckImage : WhiteCheckImage}
                style={styles.checkIcon}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
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
    width: 40,
    height: 40,
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
