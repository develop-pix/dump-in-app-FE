import React, {useState} from 'react';
import GoBackButton from '../reuse/button/GoBackButton';
import MenuImage from '../../assets/image/reuse/menu.png';
import {
  ButtonContainer,
  MyPageGoBackButtonContainerWithSafeArea,
  MyPageMenuButtonContainerWithSafeArea,
  StyledImage,
} from '../../styles/layout/my-page/Bar.style';
import Menu from './Menu';
import {Platform} from 'react-native';

export default function Bar() {
  const platform = Platform.OS;
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleOpenMenu = () => {
    setMenuVisible(true);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  return (
    <ButtonContainer>
      <MyPageGoBackButtonContainerWithSafeArea platform={platform}>
        <GoBackButton />
      </MyPageGoBackButtonContainerWithSafeArea>

      <MyPageMenuButtonContainerWithSafeArea
        platform={platform}
        onPress={handleOpenMenu}>
        <StyledImage source={MenuImage} />
      </MyPageMenuButtonContainerWithSafeArea>

      <Menu visible={isMenuVisible} handleCloseMenu={handleCloseMenu} />
    </ButtonContainer>
  );
}
