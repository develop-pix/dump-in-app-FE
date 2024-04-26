import { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import NextButtonIcon from 'assets/image/icon/btn_next_grey.svg';
import GoBackButton from 'components/reuse/button/GoBackButton';
import ConfirmationAlertModal from 'components/reuse/modal/ConfirmationAlertModal';
import { WithDrawalUser } from 'hooks/axios/Auth';
import { storage } from 'hooks/mmkv/storage';
import { setIsLoggedIn } from 'hooks/redux/loginSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux/store';
import { setUserID, setUserNickName } from 'hooks/redux/userDataSlice';
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
    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;
    const isFocused = useIsFocused();

    const [isAlertModalVisible, setIsAlertModalVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    /** 메일로 문의하기(ios simulator 작동X) */
    const onMailToDevelop = async () => {
        const emailAddress = encodeURIComponent('pix.develop.team@gmail.com');
        const subject = encodeURIComponent('Dump-in-APP 문의');
        if (isFocused) {
            await Linking.openURL(`mailto:${emailAddress}?subject=${subject}`);
        }
    };

    /** 이용약관 페이지이동(Webview) */
    const onPressTermsOfUse = () => {
        if (isFocused) {
            navigation.navigate('TermsOfUse');
        }
    };

    /** 개인정보 처리방침 페이지이동(Webview)*/
    const onPressPrivacyPolicy = () => {
        if (isFocused) {
            navigation.navigate('PrivacyPolicy');
        }
    };

    /** 로그아웃 버튼 클릭시 모달 출력 */
    const onLogoutAlert = () => {
        setIsAlertModalVisible(true);
    };

    /** 로그아웃 진행시 토큰 제거 */
    const handleLogout = () => {
        setIsAlertModalVisible(false);
        dispatch(setIsLoggedIn(false));
        storage.delete('token.accessToken');
        storage.delete('token.refreshToken');
        dispatch(setUserID(null));
        dispatch(setUserNickName(null));
    };

    /** 로그인 버튼 클릭 */
    const handleLogin = () => {
        if (isFocused) {
            navigation.navigate('Login');
        }
    };

    /** 알림 버튼 클릭 */
    const onNotificationScreen = () => {
        navigation.navigate('Notification');
    };

    const onWithDrawalAlert = () => {
        setIsModalVisible(true);
    };

    const onPressWithdrawal = async () => {
        try {
            const withdrawalResult = await WithDrawalUser();
            if (withdrawalResult.data.isDeleted) {
                setIsModalVisible(false);
                dispatch(setIsLoggedIn(false));
                storage.delete('token.accessToken');
                storage.delete('token.refreshToken');
                dispatch(setUserID(null));
                dispatch(setUserNickName(null));
            }
        } catch (error) {
            console.log('onPressWithdrawalError ' + error);
        }
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
                    <MenuItemContainer onPress={onMailToDevelop}>
                        <FontWhiteGreyBiggerSemibold>문의하기</FontWhiteGreyBiggerSemibold>
                    </MenuItemContainer>
                    <MenuItemContainer onPress={onPressTermsOfUse}>
                        <FontWhiteGreyBiggerSemibold>이용약관</FontWhiteGreyBiggerSemibold>
                    </MenuItemContainer>
                    <MenuItemContainer onPress={onPressPrivacyPolicy}>
                        <FontWhiteGreyBiggerSemibold>개인정보 처리방침</FontWhiteGreyBiggerSemibold>
                    </MenuItemContainer>
                    <MenuItemContainer>
                        <FontWhiteGreyBiggerSemibold>버전 정보</FontWhiteGreyBiggerSemibold>
                    </MenuItemContainer>
                </TextContainer>

                <UserTextContainer>
                    {isLoggedIn ? (
                        <MenuItemContainer onPress={onLogoutAlert}>
                            <FontWhiteGreyBiggerSemibold>로그아웃</FontWhiteGreyBiggerSemibold>
                        </MenuItemContainer>
                    ) : (
                        <MenuItemContainer onPress={handleLogin}>
                            <FontWhiteGreyBiggerSemibold>로그인</FontWhiteGreyBiggerSemibold>
                        </MenuItemContainer>
                    )}

                    {isLoggedIn && (
                        <MenuItemContainer onPress={onWithDrawalAlert}>
                            <FontWhiteGreyBiggerSemibold>회원탈퇴</FontWhiteGreyBiggerSemibold>
                        </MenuItemContainer>
                    )}
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

            <ConfirmationAlertModal
                isVisible={isModalVisible}
                title="정말로 회원탈퇴 하시겠습니까?"
                agreeMessage="회원탈퇴"
                disagreeMessage="아니오"
                onAgree={onPressWithdrawal}
                onDisagree={() => setIsModalVisible(false)}
            />
        </MenuSafeContainer>
    );
}
