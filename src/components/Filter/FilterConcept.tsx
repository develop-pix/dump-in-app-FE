import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {customColors} from '../../styles/base/Variable';
import {FilterDataUpdateProps} from '../../interfaces/Filter.interface';

const availableConcepts = [
  '일상',
  '커플',
  '우정샷',
  '가족',
  '앵글',
  '콜라보',
  '연예인',
  '캐릭터',
  '이달의 프레임',
  '계절',
  '생일',
  '코믹',
  '여행',
  '할로윈',
  '크리스마스',
  '기타',
];

export default function FilterConcept({
  filterData,
  setFilterData,
}: FilterDataUpdateProps) {
  const handleConceptToggle = (concept: string) => {
    // 현재 컨셉 목록에 있는지 확인
    const isSelected = filterData.concept.includes(concept);
    let updatedConcepts: string[];

    if (isSelected) {
      // 이미 선택된 경우, 선택 해제
      updatedConcepts = filterData.concept.filter(c => c !== concept);
    } else {
      // 아닌 경우, 선택
      updatedConcepts = [...filterData.concept, concept];
    }

    setFilterData(prevFilterData => ({
      ...prevFilterData,
      concept: updatedConcepts,
    }));
  };

  return (
    <View>
      <Text
        style={{
          color: customColors.text_grey,
          fontSize: 16,
          marginBottom: 10,
        }}>
        컨셉
      </Text>
      <View style={styles.conceptContainer}>
        {availableConcepts.map(concept => (
          <TouchableOpacity
            key={concept}
            style={[
              styles.conceptButton,
              {
                backgroundColor: filterData.concept.includes(concept)
                  ? 'white'
                  : customColors.background_black,
              },
            ]}
            onPress={() => handleConceptToggle(concept)}>
            <Text
              style={{
                color: filterData.concept.includes(concept)
                  ? 'black'
                  : customColors.sub_text_grey,
              }}>
              {concept}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conceptContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  conceptButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});
