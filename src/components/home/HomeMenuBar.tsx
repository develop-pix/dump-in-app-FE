import React from 'react';
import FilterImage from '../../assets/favicon/home-menu-bar/filter.png';
import SearchImage from '../../assets/favicon/home-menu-bar/search.png';
import NotificationImage from '../../assets/favicon/home-menu-bar/notification.png';
import {
  Container,
  FilterIcon,
  RightIconsBox,
  Icon,
} from '../../styles/styled-components/home/HomeMenuBar';

export default function HomeMenuBar() {
  return (
    <Container>
      <FilterIcon source={FilterImage} />
      <RightIconsBox>
        <Icon source={SearchImage} />
        <Icon source={NotificationImage} />
      </RightIconsBox>
    </Container>
  );
}
