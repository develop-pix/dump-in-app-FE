import React, {useState, useEffect, useCallback} from 'react';
import {Modal} from 'react-native';
import {
  MenuSafeContainer,
  CloseModalButtonContainer,
  MenuContentContainer,
  TextContainer,
  MenuItemContainer,
  UserTextContainer,
} from '../../styles/layout/my-page/MyPageMenu.style';
import CloseModalButton from '../reuse/button/CloseModalButton';
import {MyPageMenuProps} from '../../interfaces/MyPage.interface';
import {
  FontWhiteBiggerSemibold,
  FontWhiteGreyBiggerSemibold,
} from '../../styles/layout/reuse/text/Text.style';
import NextButtonIcon from '../../assets/image/icon/btn_next_grey.svg';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';
import {useNavigation, useIsFocused, useRoute} from '@react-navigation/native';
import {useAppSelector, useAppDispatch} from '../../hooks/redux/store';
import {setAccessToken} from '../../hooks/redux/AccessTokenSlice';
import {setUserID, setUserNickName} from '../../hooks/redux/UserDataSlice';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../interfaces/NavigationBar';
import {ScreenName} from '../../interfaces/NavigationBar';
import ConfirmationAlertModal from '../reuse/modal/ConfirmationAlertModal';

export default function MyPageMenu({visible, setMenuVisible}: MyPageMenuProps) {
  const accessToken = useAppSelector(state => state.login.token);
  const isLoggedIn = accessToken !== null;
  const dispatch = useAppDispatch();
  const onFocusNavigation = useNavigation();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const route = useRoute();
  const isFocused = useIsFocused();
  const [isAlertModalVisible, setIsAlertModalVisible] = useState(false);

  const handleCloseMenu = useCallback(() => {
    setMenuVisible(false);
  }, [setMenuVisible]);

  // 다른 페이지로 이동 시 모달 닫음 처리
  useEffect(() => {
    const unsubscribe = onFocusNavigation.addListener('focus', () => {
      handleCloseMenu();
    });

    return unsubscribe;
  }, [onFocusNavigation, handleCloseMenu]);

  // 테스트용 - 토큰 값 변경
  const handleLoginClick = () => {
    const currentScreen = (route.params as {screen: ScreenName}).screen;
    if (isFocused) {
      navigation.push('Login', {
        screen: currentScreen,
      });
    }
    handleCloseMenu();
  };

  const onLogoutAlert = () => {
    setIsAlertModalVisible(true);
  };

  const handleLogout = () => {
    // 리덕스 토큰 -> 서버로 로그아웃 요청
    setIsAlertModalVisible(false);
    dispatch(setAccessToken(null));
    dispatch(setUserID(null));
    dispatch(setUserNickName(null));
  };

  const onNotificationScreen = () => {
    const currentScreen = (route.params as {screen: ScreenName}).screen;
    navigation.navigate('Notification', {screen: currentScreen});
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <MenuSafeContainer>
        <CloseModalButtonContainer>
          <CloseModalButton setModal={handleCloseMenu} />
        </CloseModalButtonContainer>

        <MenuContentContainer>
          <TextContainer>
            <MenuItemContainer onPress={onNotificationScreen}>
              <FontWhiteBiggerSemibold>알림</FontWhiteBiggerSemibold>
              <NextButtonIcon width={34} height={34} />
            </MenuItemContainer>
          </TextContainer>

          <TextContainer>
            <MenuItemContainer>
              <FontWhiteGreyBiggerSemibold>
                문의하기
              </FontWhiteGreyBiggerSemibold>
            </MenuItemContainer>
            <MenuItemContainer>
              <FontWhiteGreyBiggerSemibold>
                이용약관
              </FontWhiteGreyBiggerSemibold>
            </MenuItemContainer>
            <MenuItemContainer>
              <FontWhiteGreyBiggerSemibold>
                개인정보 처리방침
              </FontWhiteGreyBiggerSemibold>
            </MenuItemContainer>
            <MenuItemContainer>
              <FontWhiteGreyBiggerSemibold>
                버전 정보
              </FontWhiteGreyBiggerSemibold>
            </MenuItemContainer>
          </TextContainer>

          {isLoggedIn ? (
            <UserTextContainer>
              <MenuItemContainer onPress={onLogoutAlert}>
                <FontWhiteGreyBiggerSemibold>
                  로그아웃
                </FontWhiteGreyBiggerSemibold>
              </MenuItemContainer>

              <MenuItemContainer>
                <FontWhiteGreyBiggerSemibold>
                  회원탈퇴
                </FontWhiteGreyBiggerSemibold>
              </MenuItemContainer>
            </UserTextContainer>
          ) : (
            <UserTextContainer>
              <MenuItemContainer onPress={handleLoginClick}>
                <FontWhiteGreyBiggerSemibold>
                  로그인
                </FontWhiteGreyBiggerSemibold>
              </MenuItemContainer>
            </UserTextContainer>
          )}
        </MenuContentContainer>

        <ConfirmationAlertModal
          isVisible={isAlertModalVisible}
          title="로그아웃 하시겠습니까?"
          agreeMessage="로그아웃"
          disagreeMessage="아니오"
          onAgree={handleLogout}
          onDisagree={() => setIsAlertModalVisible(false)}
        />
      </MenuSafeContainer>

      <NavigationBar currentScreen="MyPage" />
    </Modal>
  );
}
