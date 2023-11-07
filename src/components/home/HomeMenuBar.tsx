import React, {useState} from 'react';
import FilterImage from '../../assets/favicon/home-menu-bar/filter.png';
import SearchImage from '../../assets/favicon/home-menu-bar/search.png';
import NotificationImage from '../../assets/favicon/home-menu-bar/notification.png';
import {
  Container,
  FilterIcon,
  RightIconsBox,
  Icon,
} from '../../styles/styled-components/home/HomeMenuBar';
import {HomeMenuBarProps} from '../../interfaces/Home.interface';
import Filter from './Filter';
import {TouchableOpacity} from 'react-native';

export default function HomeMenuBar({
  filterData,
  setFilterData,
  onFilterSubmit,
}: HomeMenuBarProps) {
  const [isFilterVisible, setFilterVisible] = useState(false);

  const handleFilterModal = () => {
    setFilterVisible(!isFilterVisible);
  };

  return (
    <Container>
      <TouchableOpacity onPress={handleFilterModal}>
        <FilterIcon source={FilterImage} />
      </TouchableOpacity>
      <RightIconsBox>
        <Icon source={SearchImage} />
        <Icon source={NotificationImage} />
      </RightIconsBox>

      {isFilterVisible && (
        <Filter
          filterData={filterData}
          setFilterData={setFilterData}
          handleFilterModal={handleFilterModal}
          onFilterSubmit={onFilterSubmit}
        />
      )}
    </Container>
  );
}
