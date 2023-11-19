import React, {useState} from 'react';
import FilterImage from '../../assets/image/home-menu-bar/filter.png';
import SearchImage from '../../assets/image/reuse/search.png';
import NotificationImage from '../../assets/image/home-menu-bar/notification.png';
import {
  HomeMunuBarContainer,
  FilterIcon,
  HomeMunuBarIconsBox,
  HomeMunuBarIcon,
} from '../../styles/layout/home/HomeMenuBar.style';
import {HomeMenuBarProps} from '../../interfaces/Home.interface';
import HomeFilterModalForm from './HomeFilterModalForm';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../interfaces/NavigationBar';

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

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

  const onSearchScreen = () => {
    navigation.navigate('HomeSearch');
  };

  return (
    <HomeMunuBarContainer>
      <TouchableOpacity onPress={handleShowFilterModal}>
        <FilterIcon source={FilterImage} />
      </TouchableOpacity>
      <HomeMunuBarIconsBox>
        <TouchableOpacity onPress={onSearchScreen}>
          <HomeMunuBarIcon source={SearchImage} />
        </TouchableOpacity>
        <HomeMunuBarIcon source={NotificationImage} />
      </HomeMunuBarIconsBox>

      {isFilterVisible && (
        <HomeFilterModalForm
          filterData={filterData}
          setFilterData={setFilterData}
          handleHideFilterModal={handleHideFilterModal}
          onFilterSubmit={onFilterSubmit}
        />
      )}
    </HomeMunuBarContainer>
  );
}
