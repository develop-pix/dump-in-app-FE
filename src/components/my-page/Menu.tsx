import React from 'react';
import {Modal} from 'react-native';
import {MenuProps} from '../../interfaces/MyPage.interface';
import {
  MenuContainer,
  CloseModalButtonContainer,
} from '../../styles/layout/my-page/Menu.style';
import CloseModalButton from '../reuse/button/CloseModalButton';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';

export default function Menu({visible, handleCloseMenu}: MenuProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleCloseMenu}>
      <MenuContainer>
        <CloseModalButtonContainer>
          <CloseModalButton setModal={handleCloseMenu} />
        </CloseModalButtonContainer>
      </MenuContainer>

      <NavigationBar currentScreen="MyPage" />
    </Modal>
  );
}
