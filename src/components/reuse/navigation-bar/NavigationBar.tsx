import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import AddReviewIcon from '../../../assets/image/icon/btn_add.svg';
import { NavigationBarProps, RootStackParam, ScreenName } from '../../../interfaces/NavigationBar';
import { NavigationBarContainer, ReviewNewItem } from '../../../styles/layout/navigation-bar/NavigationBar.style';

import NavigationBarListItem from './NavigationBarListItem';

export default function NavigationBar({ currentScreen }: NavigationBarProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

    // 기본 페이지로 이동할 때는 해당 screen값을 넘겨줌 Home, Location, Category, MyPage
    const handleListClick = (selectedScreen: ScreenName) => {
        navigation.navigate(selectedScreen, { screen: selectedScreen });
    };

    // 기본 페이지가 아닌 페이지로 이동할 때는 현재 screen값을 넘겨줌
    const onPressRegistrationReview = () => {
        navigation.navigate('ReviewNew', {
            branchID: undefined,
            screen: currentScreen,
        });
    };

    return (
        <NavigationBarContainer>
            <NavigationBarListItem screen="Home" selectedScreen={currentScreen} handleListClick={handleListClick} />
            <NavigationBarListItem screen="Location" selectedScreen={currentScreen} handleListClick={handleListClick} />

            <ReviewNewItem onPress={onPressRegistrationReview}>
                <AddReviewIcon width={13} height={13} />
            </ReviewNewItem>

            <NavigationBarListItem screen="Category" selectedScreen={currentScreen} handleListClick={handleListClick} />
            <NavigationBarListItem screen="MyPage" selectedScreen={currentScreen} handleListClick={handleListClick} />
        </NavigationBarContainer>
    );
}
