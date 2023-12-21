import React, {useState, useEffect} from 'react';
import FilterIcon from '../../assets/image/icon/filter.svg';
import SearchIcon from '../../assets/image/icon/search.svg';
import NotificationIcon from '../../assets/image/icon/notification.svg';
import NewNotificationIcon from '../../assets/image/icon/new_notification.svg';
import {
  HomeMunuBarContainer,
  HomeMunuBarIconsBox,
  HomeMunuBarIconContainer,
} from '../../styles/layout/home/HomeMenuBar.style';
import {HomeMenuBarProps} from '../../interfaces/Home.interface';
import HomeFilterModalForm from './HomeFilterModalForm';
import {TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../interfaces/NavigationBar';
import {ScreenName} from '../../interfaces/NavigationBar';

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
  const route = useRoute();

  const [hasNotification, setHasNotification] = useState(false);

  useEffect(() => {
    checkNotification();
  }, []);

  // 알림 유무 확인 로직 추가
  const checkNotification = async () => {
    setHasNotification(true);
  };

  const onSearchScreen = () => {
    const currentScreen = (route.params as {screen: ScreenName}).screen;
    navigation.navigate('HomeSearch', {
      screen: currentScreen,
      PhotoBoothName: null,
    });
  };

  const onNotificationScreen = () => {
    const currentScreen = (route.params as {screen: ScreenName}).screen;
    navigation.navigate('Notification', {screen: currentScreen});
  };

  return (
    <HomeMunuBarContainer>
      <TouchableOpacity onPress={handleShowFilterModal}>
        <FilterIcon />
      </TouchableOpacity>
      <HomeMunuBarIconsBox>
        <TouchableOpacity onPress={onSearchScreen}>
          <SearchIcon />
        </TouchableOpacity>
        <HomeMunuBarIconContainer onPress={onNotificationScreen}>
          {hasNotification ? <NewNotificationIcon /> : <NotificationIcon />}
        </HomeMunuBarIconContainer>
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
