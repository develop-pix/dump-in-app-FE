import { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DeleteIcon from 'assets/image/icon/delete.svg';
import EventListIcon from 'assets/image/icon/result_event.svg';
import SearchNoData from 'components/reuse/alert/SearchNoData';
import GoBackButton from 'components/reuse/button/GoBackButton';
import ConfirmationAlertModal from 'components/reuse/modal/ConfirmationAlertModal';
import { fetchNotificationList, fetchNotificationListCheck } from 'hooks/axios/Notification';
import { RootStackScreenProps } from 'interfaces/Navigation.interface';
import { NotificationItemProps } from 'interfaces/Notification.interface';
import {
    DeleteContainer,
    DeleteIconWrapper,
    InfoWrapper,
    NoticeContainer,
    NotificationContentContainer,
    NotificationItemContainer,
} from 'styles/layout/notification/Notification.style';
import { HeaderLeftContainer } from 'styles/layout/reuse/header/Header.style';
import {
    FontGreySmallerMedium,
    FontLightGreySmallerMedium,
    FontWhiteGreyNormalMedium,
    FontWhiteNormalSemiboldWithLineSpacing,
} from 'styles/layout/reuse/text/Text.style';
import { DateToReviewDateForm } from 'utils/FormChange';

export default function Notification() {
    const navigation = useNavigation<RootStackScreenProps<'HomeSearch'>['navigation']>();

    const [notifications, setNotifications] = useState<NotificationItemProps[] | null>(null);
    const [isAlertModalVisible, setIsAlertModalVisible] = useState(false);

    const onDeleteAlert = () => {
        setIsAlertModalVisible(true);
    };

    const deleteNotification = () => {
        // 서버로 아이디 토큰값 보내서 알림 삭제 처리, 임시로 초기화
        setNotifications([]);
        setIsAlertModalVisible(false);
    };

    // const fetchNotifications = async () => {
    //     // 임시 데이터
    //     const data: NotificationItemProps[] = [
    //         {
    //             id: 1,
    //             title: '포토이즘 <2023 AUTUMN> 프레임 오픈픈픈픈픈픈',
    //             content:
    //                 '포토이즘즘2023AUTUMN프레임오픈포토이즘즘즘즘2023AUTUMN프레임오픈즘즘포토이즘즘즘즘즘즘즘즘2023AUTUMN프레임임오픈픈픈픈픈픈픈픈픈픈즘즘2023AUTUMN프레임오픈픈픈픈',
    //             date: new Date('2023-12-14T00:00:00+09:00'),
    //         },
    //         {
    //             id: 2,
    //             title: '포토이즘 <2023 WINTER> 프레임 오픈',
    //             content: '포토이즘 <2023 WINTER> 프레임이 오픈되었습니다.',
    //             date: new Date('2023-12-14T00:00:00+09:00'),
    //         },
    //         {
    //             id: 3,
    //             title: '포토이즘 <2023 WINTER> 프레임 오픈',
    //             content: '포토이즘 <2023 WINTER> 프레임이 오픈되었습니다.',
    //             date: new Date('2023-12-14T00:00:00+09:00'),
    //         },
    //     ];
    //     setNotifications(data);
    // };

    const getNotificationData = useCallback(async () => {
        const notificationResponse = await fetchNotificationListCheck();
        console.log('알림');
        if (notificationResponse) {
            console.log(notificationResponse);
        }
    }, []);

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

    useEffect(() => {
        getNotificationData();
    }, [getNotificationData]);

    return (
        <ScrollView>
            <NoticeContainer>
                <FontWhiteNormalSemiboldWithLineSpacing>NOTICE</FontWhiteNormalSemiboldWithLineSpacing>
                <DeleteContainer onPress={onDeleteAlert} disabled={!notifications || notifications.length === 0}>
                    <FontLightGreySmallerMedium>전체 삭제</FontLightGreySmallerMedium>
                    <DeleteIconWrapper>
                        <DeleteIcon width={16} height={16} />
                    </DeleteIconWrapper>
                </DeleteContainer>
            </NoticeContainer>

            <NotificationContentContainer>
                {notifications && notifications.length > 0 ? (
                    notifications.map((notification, _) => (
                        <NotificationItemContainer key={notification.id}>
                            <EventListIcon width={24} height={24} />

                            <InfoWrapper>
                                <FontWhiteGreyNormalMedium>{notification.title}</FontWhiteGreyNormalMedium>

                                <FontLightGreySmallerMedium>{notification.content}</FontLightGreySmallerMedium>
                                <FontGreySmallerMedium>{DateToReviewDateForm(notification.date)}</FontGreySmallerMedium>
                            </InfoWrapper>
                        </NotificationItemContainer>
                    ))
                ) : (
                    <SearchNoData alertText="알림이 없습니다." recommendText="새로운 이벤트 소식을 기대해 주세요!" />
                )}
            </NotificationContentContainer>

            <ConfirmationAlertModal
                isVisible={isAlertModalVisible}
                title="알림함의 모든 메시지를 삭제하시겠어요?"
                agreeMessage="전체 삭제"
                disagreeMessage="아니오"
                onAgree={deleteNotification}
                onDisagree={() => setIsAlertModalVisible(false)}
            />
        </ScrollView>
    );
}
