import React from 'react';
import {ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import CloseBtnImage from '../../assets/image/reuse/close-btn.png';
import {FilterFormProps} from '../../interfaces/Filter.interface';
import {FilterButton} from '../reuse/button/FilterButton';
import FilterLocation from './FilterLocation';
import FilterFrameColor from './FilterFrameColor';
import FilterParty from './FilterParty';
import FilterCameraShot from './FilterCameraShot';
import FilterConcept from './FilterConcept';
import {
  FilterFormContainer,
  FilterFormBody,
  FilterFormHeader,
  FilterFormTitle,
  CloseButton,
  CloseButtonImage,
  FilterButtonBox,
  Margin,
} from '../../styles/layout/Filter/FilterForm';

export default function FilterForm({
  filterData,
  setFilterData,
  handleHideFilterModal,
  onFilterSubmit,
}: FilterFormProps) {
  // 필터 데이터 제출 함수
  const handleFilterSubmit = () => {
    onFilterSubmit(filterData);
    // 제출 후 모달 창 닫음
    handleHideFilterModal();
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
      style={{margin: 0}}
      isVisible={true}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      deviceWidth={100}>
      <FilterFormContainer>
        <FilterFormBody>
          <FilterFormHeader>
            <FilterFormTitle>상세필터</FilterFormTitle>

            <CloseButton
              onPress={() => {
                handleHideFilterModal();
                handleFilterReset(); // 창 닫으면서 초기화
              }}>
              <CloseButtonImage source={CloseBtnImage} />
            </CloseButton>
          </FilterFormHeader>

          <ScrollView>
            <FilterLocation
              filterData={filterData}
              setFilterData={setFilterData}
            />

            <Margin />

            <FilterFrameColor
              filterData={filterData}
              setFilterData={setFilterData}
            />

            <Margin />

            <FilterParty
              filterData={filterData}
              setFilterData={setFilterData}
            />

            <Margin />

            <FilterCameraShot
              filterData={filterData}
              setFilterData={setFilterData}
            />

            <Margin />

            <FilterConcept
              filterData={filterData}
              setFilterData={setFilterData}
            />

            <FilterButtonBox>
              <FilterButton
                onPress={handleFilterReset}
                text="초기화"
                backgroundColor="black"
                borderColor="black"
                textColor="white"
              />

              <FilterButton
                onPress={handleFilterSubmit}
                text="필터적용하기"
                backgroundColor="black"
                borderColor="white"
                textColor="white"
              />
            </FilterButtonBox>
          </ScrollView>
        </FilterFormBody>
      </FilterFormContainer>
    </Modal>
  );
}
