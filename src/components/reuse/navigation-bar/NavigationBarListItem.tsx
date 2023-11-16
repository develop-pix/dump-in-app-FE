import React from 'react';
import HomeImage from '../../../assets/image/navigation-bar/home.png';
import ClickHomeImage from '../../../assets/image/navigation-bar/click-home.png';
import LocationImage from '../../../assets/image/navigation-bar/location.png';
import ClickLocationImage from '../../../assets/image/navigation-bar/click-location.png';
import CategoryImage from '../../../assets/image/navigation-bar/category.png';
import ClickCategoryImage from '../../../assets/image/navigation-bar/click-category.png';
import MyPageImage from '../../../assets/image/navigation-bar/mypage.png';
import ClickMyPageImage from '../../../assets/image/navigation-bar/click-mypage.png';
import {
  NavigationBarListItemContainer,
  NavigationImage,
} from '../../../styles/layout/navigation-bar/NavigationBarItem.style';
import {NavigationBarListItemProps} from '../../../interfaces/NavigationBar';

const imageMap: Record<string, HTMLImageElement> = {
  Home: HomeImage,
  Location: LocationImage,
  Category: CategoryImage,
  MyPage: MyPageImage,
  Branch: LocationImage,
};

const clickImageMap: Record<string, HTMLImageElement> = {
  Home: ClickHomeImage,
  Location: ClickLocationImage,
  Category: ClickCategoryImage,
  MyPage: ClickMyPageImage,
  Branch: ClickLocationImage,
};

export default function NavigationBarListItem({
  screen,
  selectedScreen,
  handleListClick,
}: NavigationBarListItemProps) {
  const imageSource =
    screen.findIndex(index => index === selectedScreen) !== -1
      ? clickImageMap[
          screen[screen.findIndex(index => index === selectedScreen)]
        ]
      : imageMap[screen[0]];

  return (
    <NavigationBarListItemContainer onPress={() => handleListClick(screen[0])}>
      <NavigationImage source={imageSource} resizeMode="contain" />
    </NavigationBarListItemContainer>
  );
}
