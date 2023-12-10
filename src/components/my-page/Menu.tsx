import React from 'react';
import {Modal} from 'react-native';
import {
  MenuSafeContainer,
  CloseModalButtonContainer,
  MenuContentContainer,
  TextContainer,
  NextButtonIcon,
  MenuItemContainer,
  UserTextContainer,
} from '../../styles/layout/my-page/Menu.style';
import CloseModalButton from '../reuse/button/CloseModalButton';
import {MenuProps} from '../../interfaces/MyPage.interface';
import {
  FontWhiteBiggerThick,
  FontWhiteGreyBiggerThick,
} from '../../styles/layout/reuse/text/Text.style';
import NextButtonImage from '../../assets/image/reuse/next-btn.png';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector, useAppDispatch} from '../../hooks/redux/store';
import {setAccessToken} from '../../hooks/redux/AccessTokenSlice';

export default function Menu({visible, handleCloseMenu}: MenuProps) {
  const accessToken = useAppSelector(state => state.login.token);
  const isLoggedIn = accessToken !== null;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  // 다른 페이지로 이동 시 모달 닫음 처리
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      handleCloseMenu();
    });

    return unsubscribe;
  }, [navigation, handleCloseMenu]);

  // 테스트용 - 토큰 값 변경
  const handleLoginClick = () => {
    dispatch(setAccessToken('asdqwemalskd'));
  };

  const handleLogoutClick = () => {
    dispatch(setAccessToken(null));
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleCloseMenu}>
      <MenuSafeContainer>
        <CloseModalButtonContainer>
          <CloseModalButton setModal={handleCloseMenu} />
        </CloseModalButtonContainer>

        <MenuContentContainer>
          <TextContainer>
            <MenuItemContainer>
              <FontWhiteBiggerThick>알림</FontWhiteBiggerThick>
              <NextButtonIcon source={NextButtonImage} />
            </MenuItemContainer>
          </TextContainer>

          <TextContainer>
            <MenuItemContainer>
              <FontWhiteGreyBiggerThick>문의하기</FontWhiteGreyBiggerThick>
            </MenuItemContainer>
            <MenuItemContainer>
              <FontWhiteGreyBiggerThick>이용약관</FontWhiteGreyBiggerThick>
            </MenuItemContainer>
            <MenuItemContainer>
              <FontWhiteGreyBiggerThick>
                개인정보 처리방침
              </FontWhiteGreyBiggerThick>
            </MenuItemContainer>
            <MenuItemContainer>
              <FontWhiteGreyBiggerThick>버전 정보</FontWhiteGreyBiggerThick>
            </MenuItemContainer>
          </TextContainer>

          {isLoggedIn ? (
            <UserTextContainer>
              <MenuItemContainer onPress={handleLogoutClick}>
                <FontWhiteGreyBiggerThick>로그아웃</FontWhiteGreyBiggerThick>
              </MenuItemContainer>

              <MenuItemContainer>
                <FontWhiteGreyBiggerThick>회원탈퇴</FontWhiteGreyBiggerThick>
              </MenuItemContainer>
            </UserTextContainer>
          ) : (
            <UserTextContainer>
              <MenuItemContainer onPress={handleLoginClick}>
                <FontWhiteGreyBiggerThick>로그인</FontWhiteGreyBiggerThick>
              </MenuItemContainer>
            </UserTextContainer>
          )}
        </MenuContentContainer>
      </MenuSafeContainer>

      <NavigationBar currentScreen="MyPage" />
    </Modal>
  );
}
