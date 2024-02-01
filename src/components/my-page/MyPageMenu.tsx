import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import NextButtonIcon from 'assets/image/icon/btn_next_grey.svg';
import GoBackButton from 'components/reuse/button/GoBackButton';
import ConfirmationAlertModal from 'components/reuse/modal/ConfirmationAlertModal';
import { setAccessToken } from 'hooks/redux/AccessTokenSlice';
import { useAppDispatch } from 'hooks/redux/store';
import { setUserID, setUserNickName } from 'hooks/redux/UserDataSlice';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
import {
    MenuContentContainer,
    MenuItemContainer,
    MenuSafeContainer,
    TextContainer,
    UserTextContainer,
} from 'styles/layout/my-page/MyPageMenu.style';
import { HeaderLeftContainer } from 'styles/layout/reuse/header/Header.style';
import { FontWhiteBiggerSemibold, FontWhiteGreyBiggerSemibold } from 'styles/layout/reuse/text/Text.style';

export default function MyPageMenu() {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<MyPageStackScreenProps<'MyPage'>['navigation']>();

    const [isAlertModalVisible, setIsAlertModalVisible] = useState(false);

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
        navigation.navigate('Notification');
    };

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <HeaderLeftContainer>
                        <GoBackButton />
                    </HeaderLeftContainer>
                );
            },
        });
    }, [navigation]);

    return (
        <MenuSafeContainer>
            <MenuContentContainer>
                <TextContainer>
                    <MenuItemContainer onPress={onNotificationScreen}>
                        <FontWhiteBiggerSemibold>알림</FontWhiteBiggerSemibold>
                        <NextButtonIcon width={34} height={34} />
                    </MenuItemContainer>
                </TextContainer>

                <TextContainer>
                    <MenuItemContainer>
                        <FontWhiteGreyBiggerSemibold>문의하기</FontWhiteGreyBiggerSemibold>
                    </MenuItemContainer>
                    <MenuItemContainer>
                        <FontWhiteGreyBiggerSemibold>이용약관</FontWhiteGreyBiggerSemibold>
                    </MenuItemContainer>
                    <MenuItemContainer>
                        <FontWhiteGreyBiggerSemibold>개인정보 처리방침</FontWhiteGreyBiggerSemibold>
                    </MenuItemContainer>
                    <MenuItemContainer>
                        <FontWhiteGreyBiggerSemibold>버전 정보</FontWhiteGreyBiggerSemibold>
                    </MenuItemContainer>
                </TextContainer>

                <UserTextContainer>
                    <MenuItemContainer onPress={onLogoutAlert}>
                        <FontWhiteGreyBiggerSemibold>로그아웃</FontWhiteGreyBiggerSemibold>
                    </MenuItemContainer>

                    <MenuItemContainer>
                        <FontWhiteGreyBiggerSemibold>회원탈퇴</FontWhiteGreyBiggerSemibold>
                    </MenuItemContainer>
                </UserTextContainer>
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
    );
}
