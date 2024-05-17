import { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DeleteIcon from 'assets/image/icon/delete.svg';
import EventListIcon from 'assets/image/icon/result_event.svg';
import SearchNoData from 'components/reuse/alert/SearchNoData';
import GoBackButton from 'components/reuse/button/GoBackButton';
import ConfirmationAlertModal from 'components/reuse/modal/ConfirmationAlertModal';
import { deleteNotificationList, fetchNotificationList } from 'hooks/axios/Notification';
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

    const [notifications, setNotifications] = useState<NotificationItemProps[]>([]);
    const [isAlertModalVisible, setIsAlertModalVisible] = useState(false);
    const [dataFetched, setDataFetched] = useState(false);

    const onDeleteAlert = () => {
        setIsAlertModalVisible(true);
    };

    const deleteNotification = async () => {
        const deleteNotificationResponse = await deleteNotificationList();
        if (deleteNotificationResponse) {
            setNotifications([]);
        }
        setIsAlertModalVisible(false);
    };

    const getNotificationData = useCallback(async () => {
        const notificationResponse = await fetchNotificationList();
        if (notificationResponse) {
            setNotifications(notificationResponse.data);
        }
        setDataFetched(true);
    }, []);

    useEffect(() => {
        getNotificationData();
    }, [getNotificationData]);

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
        <>
            <NoticeContainer>
                <FontWhiteNormalSemiboldWithLineSpacing>NOTICE</FontWhiteNormalSemiboldWithLineSpacing>
                <DeleteContainer onPress={onDeleteAlert} disabled={!notifications || notifications.length === 0}>
                    <FontLightGreySmallerMedium>전체 삭제</FontLightGreySmallerMedium>
                    <DeleteIconWrapper>
                        <DeleteIcon width={16} height={16} />
                    </DeleteIconWrapper>
                </DeleteContainer>
            </NoticeContainer>
            <ScrollView>
                <NotificationContentContainer>
                    {dataFetched && notifications.length === 0 ? (
                        <SearchNoData
                            alertText="알림이 없습니다."
                            recommendText="새로운 이벤트 소식을 기대해 주세요!"
                        />
                    ) : (
                        notifications.map((notification, _) => (
                            <NotificationItemContainer key={notification.id}>
                                <EventListIcon width={24} height={24} />
                                <InfoWrapper>
                                    <FontWhiteGreyNormalMedium>{notification.title}</FontWhiteGreyNormalMedium>
                                    <FontLightGreySmallerMedium>{notification.content}</FontLightGreySmallerMedium>
                                    <FontGreySmallerMedium>
                                        {DateToReviewDateForm(notification.createdAt)}
                                    </FontGreySmallerMedium>
                                </InfoWrapper>
                            </NotificationItemContainer>
                        ))
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
        </>
    );
}
