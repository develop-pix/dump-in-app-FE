import React from 'react';
import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import CloseBtnImage from '../../assets/favicon/close-btn.png';
import {FilterModalProps} from '../../interfaces/Home.interface';
import {customColors} from '../../styles/base/Variable';
import FilterButton from '../reuse/button/FilterButton';

export default function Filter({
  filterData,
  setFilterData,
  handleFilterModal,
  onFilterSubmit,
}: FilterModalProps) {
  // 필터 데이터 제출 함수
  const handleFilterSubmit = () => {
    onFilterSubmit(filterData);
    // 모달 창 닫음
    handleFilterModal();
  };

  // 필터 데이터 초기화 함수
  const handleFilterReset = () => {
    setFilterData({
      geolocation: '',
      frameColor: '',
      party: 0,
      cameraShot: '',
      concept: [],
    });
  };

  return (
    <Modal
      visible={true} // 모달의 가시성
      animationType="slide" // 슬라이드 애니메이션 사용
      transparent={true} // 배경을 투명하게 설정
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            height: '95%',
            backgroundColor: customColors.background_grey,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                flex: 1,
                textAlign: 'center',
              }}>
              상세필터
            </Text>

            <TouchableOpacity onPress={handleFilterModal}>
              <Image source={CloseBtnImage} style={{width: 40, height: 40}} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <FilterButton
              onPress={handleFilterReset}
              text="초기화"
              backgroundColor="blue"
              borderColor="blue"
              textColor="white"
            />

            <FilterButton
              onPress={handleFilterSubmit}
              text="필터적용하기"
              backgroundColor="green"
              borderColor="green"
              textColor="white"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
