import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../styles/base/Variable';
import {FilterDataUpdateProps} from '../../interfaces/Filter.interface';

const partyNum = [1, 2, 3, 4, 5];

export default function FilterParty({
  filterData,
  setFilterData,
}: FilterDataUpdateProps) {
  const handlePartyToggle = (party: number) => {
    const isSelected = filterData.party === party;
    // 5+ 선택 시 5로 저장
    const partyValue = party === 5 ? 5 : party;

    setFilterData(prevFilterData => ({
      ...prevFilterData,
      party: isSelected ? 0 : partyValue,
    }));
  };

  return (
    <View>
      <Text style={{color: colors.first_grey, fontSize: 16, marginBottom: 10}}>
        인원
      </Text>
      <View style={styles.partyContainer}>
        {partyNum.map(partyOption => (
          <TouchableOpacity
            key={partyOption}
            style={[
              styles.partyButton,
              {
                backgroundColor:
                  filterData.party === partyOption
                    ? 'white'
                    : colors.fourth_grey,
              },
            ]}
            onPress={() => handlePartyToggle(partyOption)}>
            <Text
              style={{
                color:
                  filterData.party === partyOption
                    ? 'black'
                    : colors.second_grey,
              }}>
              {partyOption === 5 ? '5 +' : partyOption}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  partyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  partyButton: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
