import React from 'react';
import GoBackButton from '../button/GoBackButton';
import MenuImage from '../../../assets/image/reuse/menu.png';
import {
  ButtonContainer,
  MyPageGoBackButtonContainerWithSafeArea,
  MyPageMenuButtonContainerWithSafeArea,
  StyledImage,
} from '../../../styles/layout/reuse/header/MyPageBar.style';
import {Platform} from 'react-native';
import {MyPageBarProps} from '../../../interfaces/reuse/header/MyPageBar.interface';

export default function MyPageBar({setMenuVisible}: MyPageBarProps) {
  const platform = Platform.OS;

  const handleOpenMenu = () => {
    setMenuVisible(true);
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
    </ButtonContainer>
  );
}
