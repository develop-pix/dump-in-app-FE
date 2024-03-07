import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import Modal from 'react-native-modal';

import CloseIcon from 'assets/image/icon/btn_close.svg';
import SkeletonGetMoreMyPageEvent from 'components/reuse/skeleton/SkeletonGetMoreMyPageEvent';
import { EventDataType, MoreEventModalProps } from 'interfaces/PhotoBoothDetail.interface';
import {
    CloseButtonContainer,
    MoreEventModalContainer,
    TitleContainer,
} from 'styles/layout/photo-booth-detail/MoreEventModal.style';
import { FontWhiteGreyNormalSemibold } from 'styles/layout/reuse/text/Text.style';

import PhotoBoothEventFrame from './PhotoBoothEventFrame';

export default function MoreEventModal({ visible, onClose, eventData }: MoreEventModalProps) {
    const [allEventData, setAllEventData] = useState(eventData);

    const onEndReached = () => {
        // 스크롤 시 새로운 임시 데이터
        const lastEventID = allEventData[allEventData.length - 1].id;
        const newEventData: EventDataType[] = [
            {
                id: lastEventID + 1,
                mainThumbnailImageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                title: '화사의 ‘I Love My Body’ 프레임',
                startDate: '2023-09-07',
                endDate: '2023-10-31',
                isLiked: true,
            },
            {
                id: lastEventID + 2,
                mainThumbnailImageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                title: '화사의 ‘I Love My Body’ 프레임',
                startDate: '2023-09-07',
                endDate: '2023-10-31',
                isLiked: true,
            },
            {
                id: lastEventID + 3,
                mainThumbnailImageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                title: '화사의 ‘I Love My Body’ 프레임',
                startDate: '2023-09-07',
                endDate: '2023-10-31',
                isLiked: true,
            },
            {
                id: lastEventID + 4,
                mainThumbnailImageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                title: '화사의 ‘I Love My Body’ 프레임',
                startDate: '2023-09-07',
                endDate: '2023-10-31',
                isLiked: true,
            },
        ];

        // 새로운 데이터를 기존 데이터에 추가
        setAllEventData(prevData => [...prevData, ...newEventData]);
    };

    const renderEventItem = useCallback(({ item }: { item: EventDataType }) => {
        return <PhotoBoothEventFrame event={item} />;
    }, []);

    return (
        <Modal
            isVisible={visible}
            style={{ margin: 0, marginBottom: 90, justifyContent: 'flex-end' }}
            backdropOpacity={0.7}
            onBackdropPress={onClose}>
            <MoreEventModalContainer>
                <TitleContainer>
                    <FontWhiteGreyNormalSemibold>이벤트 전체보기</FontWhiteGreyNormalSemibold>
                    <CloseButtonContainer onPress={onClose}>
                        <CloseIcon />
                    </CloseButtonContainer>
                </TitleContainer>

                <FlatList
                    data={allEventData}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderEventItem}
                    onEndReached={onEndReached}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={<SkeletonGetMoreMyPageEvent />}
                />
            </MoreEventModalContainer>
        </Modal>
    );
}
