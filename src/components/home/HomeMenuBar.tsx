import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NewNotificationIcon from 'assets/image/icon/alert_notification.svg';
import FilterIcon from 'assets/image/icon/filter.svg';
import NotificationIcon from 'assets/image/icon/notification.svg';
import SearchIcon from 'assets/image/icon/search.svg';
import { HomeMenuBarProps } from 'interfaces/Home.interface';
import {
    HomeMenuBarContainer,
    HomeMenuBarIconContainer,
    HomeMenuBarIconsBox,
} from 'styles/layout/home/HomeMenuBar.style';

import HomeFilterModalForm from './HomeFilterModalForm';

export default function HomeMenuBar({ filterData, setFilterData, onFilterSubmit }: HomeMenuBarProps) {
    const [isFilterVisible, setFilterVisible] = useState(false);

    /** 필터 모달창 여는 함수 */
    const handleShowFilterModal = () => {
        setFilterVisible(true);
    };

    /** 필터 모달창 닫는 함수 */
    const handleHideFilterModal = () => {
        setFilterVisible(false);
    };

    const navigation = useNavigation();

    const [hasNotification, setHasNotification] = useState(false);

    useEffect(() => {
        checkNotification();
    }, []);

    /** TODO: 알림 유무 확인 로직 추가 */
    const checkNotification = async () => {
        setHasNotification(true);
    };

    const onSearchScreen = () => {
        navigation.navigate('HomeSearch', {
            photoBoothName: null,
        });
    };

    const onNotificationScreen = () => {
        navigation.navigate('Notification');
    };

    return (
        <HomeMenuBarContainer>
            <TouchableOpacity onPress={handleShowFilterModal}>
                <FilterIcon />
            </TouchableOpacity>
            <HomeMenuBarIconsBox>
                <TouchableOpacity onPress={onSearchScreen}>
                    <SearchIcon />
                </TouchableOpacity>
                <HomeMenuBarIconContainer onPress={onNotificationScreen}>
                    {hasNotification ? <NewNotificationIcon /> : <NotificationIcon />}
                </HomeMenuBarIconContainer>
            </HomeMenuBarIconsBox>
            {isFilterVisible && (
                <HomeFilterModalForm
                    filterData={filterData}
                    setFilterData={setFilterData}
                    handleHideFilterModal={handleHideFilterModal}
                    onFilterSubmit={onFilterSubmit}
                />
            )}
        </HomeMenuBarContainer>
    );
}
