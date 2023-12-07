import React, {useState} from 'react';
import {FlatList} from 'react-native';
import Modal from 'react-native-modal';
import PhotoBoothEventFrame from './PhotoBoothEventFrame';
import {
  MoreEventModalProps,
  EventDataType,
} from '../../interfaces/PhotoBoothDetail.interface';
import {
  MoreEventModalContainer,
  TitleContainer,
  CloseButtonContainer,
  CloseButtonIcon,
} from '../../styles/layout/photobooth-detail/MoreEventModal.style';
import CloseButtonImage from '../../assets/image/reuse/close-btn.png';
import {FontWhiteGreyNormalThick} from '../../styles/layout/reuse/text/Text.style';
import GetMoreReview from '../reuse/photo-dump/GetMoreReview';

export default function MoreEventModal({
  visible,
  onClose,
  eventData,
}: MoreEventModalProps) {
  const [allEventData, setAllEventData] = useState(eventData);

  const onEndReached = () => {
    // 스크롤 시 새로운 임시 데이터
    const lastEventID = allEventData[allEventData.length - 1].eventID;
    const newEventData: EventDataType[] = [
      {
        eventID: lastEventID + 1,
        representativeImage:
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        eventTitle: '화사의 ‘I Love My Body’ 프레임',
        startDate: '2023-09-07',
        endDate: '2023-10-31',
        myEvent: true,
      },
      {
        eventID: lastEventID + 2,
        representativeImage:
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        eventTitle: '화사의 ‘I Love My Body’ 프레임',
        startDate: '2023-09-07',
        endDate: '2023-10-31',
        myEvent: true,
      },
      {
        eventID: lastEventID + 3,
        representativeImage:
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        eventTitle: '화사의 ‘I Love My Body’ 프레임',
        startDate: '2023-09-07',
        endDate: '2023-10-31',
        myEvent: true,
      },
      {
        eventID: lastEventID + 4,
        representativeImage:
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        eventTitle: '화사의 ‘I Love My Body’ 프레임',
        startDate: '2023-09-07',
        endDate: '2023-10-31',
        myEvent: true,
      },
    ];

    // 새로운 데이터를 기존 데이터에 추가
    setAllEventData(prevData => [...prevData, ...newEventData]);
  };

  const renderEventItem = ({item}: {item: EventDataType}) => (
    <PhotoBoothEventFrame event={item} />
  );

  return (
    <Modal
      isVisible={visible}
      style={{margin: 0, marginBottom: 90, justifyContent: 'flex-end'}}
      backdropOpacity={0.7}
      onBackdropPress={onClose}>
      <MoreEventModalContainer>
        <TitleContainer>
          <FontWhiteGreyNormalThick>이벤트 전체보기</FontWhiteGreyNormalThick>
          <CloseButtonContainer onPress={onClose}>
            <CloseButtonIcon source={CloseButtonImage} />
          </CloseButtonContainer>
        </TitleContainer>

        <FlatList
          data={allEventData}
          keyExtractor={item => item.eventID.toString()}
          renderItem={renderEventItem}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.1}
          ListFooterComponent={<GetMoreReview />}
        />
      </MoreEventModalContainer>
    </Modal>
  );
}
