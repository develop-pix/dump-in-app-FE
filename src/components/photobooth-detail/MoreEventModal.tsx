import React from 'react';
import {ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import PhotoBoothEventFrame from './PhotoBoothEventFrame';
import {MoreEventModalProps} from '../../interfaces/PhotoBoothDetail.interface';
import {
  MoreEventModalContainer,
  TitleContainer,
  Title,
  CloseButtonContainer,
  CloseButtonIcon,
} from '../../styles/layout/photobooth-detail/MoreEventModal.style';
import CloseButtonImage from '../../assets/image/reuse/close-btn.png';

export default function MoreEventModal({
  visible,
  onClose,
  eventData,
}: MoreEventModalProps) {
  return (
    <Modal
      isVisible={visible}
      style={{margin: 0, marginBottom: 90, justifyContent: 'flex-end'}}
      backdropOpacity={0.7}
      onBackdropPress={onClose}>
      <MoreEventModalContainer>
        <TitleContainer>
          <Title>이벤트 전체보기</Title>
          <CloseButtonContainer onPress={onClose}>
            <CloseButtonIcon source={CloseButtonImage} />
          </CloseButtonContainer>
        </TitleContainer>

        <ScrollView>
          {eventData.map(event => (
            <PhotoBoothEventFrame key={event.eventID} event={event} />
          ))}
        </ScrollView>
      </MoreEventModalContainer>
    </Modal>
  );
}
