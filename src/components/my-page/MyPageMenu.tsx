import React, {useEffect, useCallback} from 'react';
import {Modal} from 'react-native';
import {
  MenuSafeContainer,
  CloseModalButtonContainer,
  MenuContentContainer,
  TextContainer,
  NextButtonIcon,
  MenuItemContainer,
  UserTextContainer,
} from '../../styles/layout/my-page/MyPageMenu.style';
import CloseModalButton from '../reuse/button/CloseModalButton';
import {MyPageMenuProps} from '../../interfaces/MyPage.interface';
import {
  FontWhiteBiggerThick,
  FontWhiteGreyBiggerThick,
} from '../../styles/layout/reuse/text/Text.style';
import NextButtonImage from '../../assets/image/reuse/next-btn.png';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector, useAppDispatch} from '../../hooks/redux/store';
import {setAccessToken} from '../../hooks/redux/AccessTokenSlice';
import {setUserID, setUserNickName} from '../../hooks/redux/UserDataSlice';

export default function MyPageMenu({visible, setMenuVisible}: MyPageMenuProps) {
  const accessToken = useAppSelector(state => state.login.token);
  const isLoggedIn = accessToken !== null;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const handleCloseMenu = useCallback(() => {
    setMenuVisible(false);
  }, [setMenuVisible]);

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
    dispatch(setUserID('jsee53'));
    dispatch(setUserNickName('지나가는 오리너구리'));
  };

  const handleLogoutClick = () => {
    dispatch(setAccessToken(null));
    dispatch(setUserID(null));
    dispatch(setUserNickName(null));
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
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
