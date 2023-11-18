import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import CloseBtnImage from '../../assets/image/reuse/close-btn.png';
import {HomeFilterModalFormProps} from '../../interfaces/reuse/Filter.interface';
import {FilterButton} from '../reuse/button/FilterButton';
import FilterLocation from '../reuse/filter/FilterLocation';
import FilterFrameColor from '../reuse/filter/FilterFrameColor';
import FilterParty from '../reuse/filter/FilterParty';
import FilterCameraShot from '../reuse/filter/FilterCameraShot';
import FilterConcept from '../reuse/filter/FilterConcept';
import {
  FilterFormContainer,
  FilterFormBody,
  FilterFormHeader,
  FilterFormTitle,
  FilterOptionContainer,
  CloseButton,
  CloseButtonImage,
  FilterButtonBox,
} from '../../styles/layout/home/HomeFilterModalForm.style';
import {FilterProps} from '../../interfaces/reuse/Filter.interface';
import {colors} from '../../styles/base/Variable';

export default function HomeFilterModalForm({
  filterData,
  setFilterData,
  handleHideFilterModal,
  onFilterSubmit,
}: HomeFilterModalFormProps) {
  // 모달창의 필터 변수
  const [filterModalFilterData, setFilterModalFilterData] =
    useState<FilterProps>(filterData);

  // 필터 데이터 제출 함수
  const handleFilterSubmit = () => {
    setFilterData(filterModalFilterData);
    onFilterSubmit(filterModalFilterData);
    // 제출 후 모달 창 닫음
    handleHideFilterModal();
  };

  // 필터 데이터 초기화 함수
  const handleFilterReset = () => {
    setFilterModalFilterData({
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
            <FilterFormTitle>상세 필터</FilterFormTitle>

            <CloseButton
              onPress={() => {
                handleHideFilterModal();
                handleFilterReset(); // 창 닫으면서 초기화
              }}>
              <CloseButtonImage source={CloseBtnImage} />
            </CloseButton>
          </FilterFormHeader>

          <ScrollView>
            <LinearGradient
              colors={['transparent', colors.black]}
              locations={[0.2, 0.3]}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: -400,
                height: 720,
              }}
            />

            <FilterOptionContainer>
              <FilterLocation
                filterData={filterModalFilterData}
                setFilterData={setFilterModalFilterData}
              />

              <FilterFrameColor
                filterData={filterModalFilterData}
                setFilterData={setFilterModalFilterData}
              />

              <FilterParty
                filterData={filterModalFilterData}
                setFilterData={setFilterModalFilterData}
              />

              <FilterCameraShot
                filterData={filterModalFilterData}
                setFilterData={setFilterModalFilterData}
              />

              <FilterConcept
                filterData={filterModalFilterData}
                setFilterData={setFilterModalFilterData}
              />

              <FilterButtonBox>
                <FilterButton
                  onPress={handleFilterReset}
                  text="초기화"
                  backgroundColor={colors.third_grey}
                  borderColor={colors.black}
                  textColor={colors.white}
                />

                <FilterButton
                  onPress={handleFilterSubmit}
                  text="필터적용하기"
                  backgroundColor={colors.black}
                  borderColor={colors.white}
                  textColor={colors.white}
                />
              </FilterButtonBox>
            </FilterOptionContainer>
          </ScrollView>
        </FilterFormBody>
      </FilterFormContainer>
    </Modal>
  );
}
