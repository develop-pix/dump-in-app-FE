import React from 'react';
import GoBackButton from '../button/GoBackButton';
import MenuIcon from '../../../assets/image/icon/menu.svg';
import {
  ButtonContainer,
  MyPageGoBackButtonContainerWithSafeArea,
  MyPageMenuButtonContainerWithSafeArea,
  MenuIconContainer,
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
        <MenuIconContainer>
          <MenuIcon width={18} height={12} />
        </MenuIconContainer>
      </MyPageMenuButtonContainerWithSafeArea>
    </ButtonContainer>
  );
}
