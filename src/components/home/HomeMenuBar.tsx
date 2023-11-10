import React, {useState} from 'react';
import FilterImage from '../../assets/image/home-menu-bar/filter.png';
import SearchImage from '../../assets/image/reuse/search.png';
import NotificationImage from '../../assets/image/home-menu-bar/notification.png';
import {
  HomeMunuBarContainer,
  FilterIcon,
  HomeMunuBarIconsBox,
  HomeMunuBarIcon,
} from '../../styles/layout/home/HomeMenuBar';
import {HomeMenuBarProps} from '../../interfaces/Home.interface';
import FilterForm from './HomeFilterModalForm';
import {TouchableOpacity} from 'react-native';

export default function HomeMenuBar({
  filterData,
  setFilterData,
  onFilterSubmit,
}: HomeMenuBarProps) {
  const [isFilterVisible, setFilterVisible] = useState(false);

  // 필터 모달창 여는 함수
  const handleShowFilterModal = () => {
    setFilterVisible(true);
  };

  // 필터 모달창 닫는 함수
  const handleHideFilterModal = () => {
    setFilterVisible(false);
  };

  return (
    <HomeMunuBarContainer>
      <TouchableOpacity onPress={handleShowFilterModal}>
        <FilterIcon source={FilterImage} />
      </TouchableOpacity>
      <HomeMunuBarIconsBox>
        <HomeMunuBarIcon source={SearchImage} />
        <HomeMunuBarIcon source={NotificationImage} />
      </HomeMunuBarIconsBox>

      {isFilterVisible && (
        <FilterForm
          filterData={filterData}
          setFilterData={setFilterData}
          handleHideFilterModal={handleHideFilterModal}
          onFilterSubmit={onFilterSubmit}
        />
      )}
    </HomeMunuBarContainer>
  );
}
