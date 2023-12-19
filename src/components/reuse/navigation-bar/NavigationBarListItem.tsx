import React from 'react';
import HomeImage from '../../../assets/image/icon/navigation-icon/home.svg';
import ClickHomeImage from '../../../assets/image/icon/navigation-icon/click_home.svg';
import LocationImage from '../../../assets/image/icon/navigation-icon/location.svg';
import ClickLocationImage from '../../../assets/image/icon/navigation-icon/click_location.svg';
import CategoryImage from '../../../assets/image/icon/navigation-icon/category.svg';
import ClickCategoryImage from '../../../assets/image/icon/navigation-icon/click_category.svg';
import MyPageImage from '../../../assets/image/icon/navigation-icon/mypage.svg';
import ClickMyPageImage from '../../../assets/image/icon/navigation-icon/click_mypage.svg';
import {
  NavigationBarListItemContainer,
  NavigationImageContainer,
} from '../../../styles/layout/navigation-bar/NavigationBarItem.style';
import {NavigationBarListItemProps} from '../../../interfaces/NavigationBar';

const imageMap: Record<string, React.JSX.Element> = {
  Home: <HomeImage />,
  Location: <LocationImage />,
  Category: <CategoryImage />,
  MyPage: <MyPageImage />,
};

const clickImageMap: Record<string, React.JSX.Element> = {
  Home: <ClickHomeImage />,
  Location: <ClickLocationImage />,
  Category: <ClickCategoryImage />,
  MyPage: <ClickMyPageImage />,
};

export default function NavigationBarListItem({
  screen,
  selectedScreen,
  handleListClick,
}: NavigationBarListItemProps) {
  const imageSource =
    screen === selectedScreen ? clickImageMap[screen] : imageMap[screen];

  return (
    <NavigationBarListItemContainer onPress={() => handleListClick(screen)}>
      <NavigationImageContainer>{imageSource}</NavigationImageContainer>
    </NavigationBarListItemContainer>
  );
}
