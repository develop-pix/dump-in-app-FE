import React from 'react';
import HomeImage from '../../../assets/favicon/navigation-bar/home.png';
import ClickHomeImage from '../../../assets/favicon/navigation-bar/click-home.png';
import LocationImage from '../../../assets/favicon/navigation-bar/location.png';
import ClickLocationImage from '../../../assets/favicon/navigation-bar/click-location.png';
import CategoryImage from '../../../assets/favicon/navigation-bar/category.png';
import ClickCategoryImage from '../../../assets/favicon/navigation-bar/click-category.png';
import MyPageImage from '../../../assets/favicon/navigation-bar/mypage.png';
import ClickMyPageImage from '../../../assets/favicon/navigation-bar/click-mypage.png';
import {
  Container,
  StyledImage,
} from '../../../styles/styled-components/navigation-bar/NavigationBarItem';
import {NavigationBarListItemProps} from '../../../interfaces/NavigationBar';

const imageMap: Record<string, any> = {
  Home: HomeImage,
  Location: LocationImage,
  Category: CategoryImage,
  MyPage: MyPageImage,
};

const clickImageMap: Record<string, any> = {
  Home: ClickHomeImage,
  Location: ClickLocationImage,
  Category: ClickCategoryImage,
  MyPage: ClickMyPageImage,
};

export default function NavigationBarListItem({
  screen,
  selectedScreen,
  handleListClick,
}: NavigationBarListItemProps) {
  const imageSource =
    selectedScreen === screen ? clickImageMap[screen] : imageMap[screen];

  return (
    <Container onPress={() => handleListClick(screen)}>
      <StyledImage source={imageSource} resizeMode="contain" />
    </Container>
  );
}
