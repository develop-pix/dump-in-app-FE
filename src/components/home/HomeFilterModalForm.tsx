import { useCallback, useEffect, useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';

import CloseIcon from 'assets/image/icon/btn_close.svg';
import { FilterButton } from 'components/reuse/button/FilterButton';
import { FilterProps, HomeFilterModalFormProps } from 'interfaces/reuse/Filter.interface';
import { colors } from 'styles/base/Variable';
import {
    CloseButton,
    FilterButtonBox,
    FilterFormBody,
    FilterFormContainer,
    FilterFormHeader,
    FilterOptionContainer,
} from 'styles/layout/home/HomeFilterModalForm.style';
import { FontWhiteGreyNormalSemibold } from 'styles/layout/reuse/text/Text.style';

import FilterCameraShot from './filter/FilterCameraShot';
import FilterConcept from './filter/FilterConcept';
import FilterFrameColor from './filter/FilterFrameColor';
import FilterLocation from './filter/FilterLocation';
import FilterParty from './filter/FilterParty';

export default function HomeFilterModalForm({
    filterData,
    isVisible,
    setFilterData,
    handleHideFilterModal,
    onFilterSubmit,
}: HomeFilterModalFormProps) {
    const headerHeight = useHeaderHeight();
    const height = Dimensions.get('window').height;

    // 모달창의 필터 변수
    const [filterModalFilterData, setFilterModalFilterData] = useState<FilterProps>(filterData);
    // 필터 옵션이 선택 되었는지 여부(버튼 활성화 용)
    const [isFilterSelected, setIsFilterSelected] = useState<boolean>(false);
    // 필터 옵션이 선택 되었는지 여부(초기화 버튼 활성화 용)
    const [activateResetButton, setActivateResetButton] = useState<boolean>(false);
    // 필터 옵션 적용 결과 데이터 수
    const [resultNumber, setResultNumber] = useState<number>(0);

    // 필터 옵션 선택 시 실행(제출x)
    const filterOptionSelect = useCallback(() => {
        const isFilterOptionSelected = Object.values(filterModalFilterData).some(
            val => val !== '' && val !== 0 && val.length !== 0,
        );
        setActivateResetButton(isFilterOptionSelected);

        const isFilterChanged = JSON.stringify(filterModalFilterData) !== JSON.stringify(filterData);
        setIsFilterSelected(isFilterChanged);
    }, [filterModalFilterData, filterData]);

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

    useEffect(() => {
        filterOptionSelect();
        /** 모달창 열었을 때 선택된 옵션이 있으면 결과 데이터 수 가져옴 */
        const isFilterOptionSelected = Object.values(filterModalFilterData).some(
            val => val !== '' && val !== 0 && val.length !== 0,
        );
        if (isFilterOptionSelected) {
            // TODO: 서버에서 선택된 필터들(제출한 필터 x) 제출하고 결과데이터 수 받는 로직 추가
            const resultDataNumber = Math.round(Math.random() * 100);
            setResultNumber(resultDataNumber);
        }
    }, [filterModalFilterData, filterOptionSelect]);

    return (
        <Modal
            style={{ margin: 0 }}
            isVisible={isVisible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.7}>
            <FilterFormContainer>
                <FilterFormBody style={{ height: height - headerHeight }}>
                    <FilterFormHeader>
                        <FontWhiteGreyNormalSemibold>상세 필터</FontWhiteGreyNormalSemibold>
                        <CloseButton
                            onPress={() => {
                                handleHideFilterModal();
                                handleFilterReset(); // 창 닫으면서 초기화
                            }}>
                            <CloseIcon width={44} height={44} />
                        </CloseButton>
                    </FilterFormHeader>

                    <ScrollView>
                        <LinearGradient
                            colors={['transparent', colors.lightblack]}
                            locations={[0, 0.25]}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                height: 96,
                                width: '100%',
                            }}
                        />
                        <FilterOptionContainer>
                            <FilterLocation
                                filterData={filterModalFilterData}
                                setFilterData={setFilterModalFilterData}
                                filterOptionSelect={filterOptionSelect}
                            />
                            <FilterFrameColor
                                filterData={filterModalFilterData}
                                setFilterData={setFilterModalFilterData}
                                filterOptionSelect={filterOptionSelect}
                            />
                            <FilterParty
                                filterData={filterModalFilterData}
                                setFilterData={setFilterModalFilterData}
                                filterOptionSelect={filterOptionSelect}
                            />
                            <FilterCameraShot
                                filterData={filterModalFilterData}
                                setFilterData={setFilterModalFilterData}
                                filterOptionSelect={filterOptionSelect}
                            />
                            <FilterConcept
                                filterData={filterModalFilterData}
                                setFilterData={setFilterModalFilterData}
                                filterOptionSelect={filterOptionSelect}
                            />
                            <FilterButtonBox>
                                <FilterButton
                                    onPress={handleFilterReset}
                                    text="초기화"
                                    backgroundColor={colors.darkgrey}
                                    borderColor={colors.darkgrey}
                                    textColor={colors.white}
                                    disabled={!activateResetButton}
                                />
                                <FilterButton
                                    onPress={handleFilterSubmit}
                                    text={
                                        activateResetButton
                                            ? `필터 적용하기 (${resultNumber >= 100 ? '99+' : resultNumber})`
                                            : '필터 적용하기'
                                    }
                                    backgroundColor={colors.black}
                                    borderColor={colors.white}
                                    textColor={colors.white}
                                    disabled={!isFilterSelected}
                                />
                            </FilterButtonBox>
                        </FilterOptionContainer>
                    </ScrollView>
                </FilterFormBody>
            </FilterFormContainer>
        </Modal>
    );
}
