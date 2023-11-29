import React, {useState} from 'react';
import {PhotoBoothEventProps} from '../../interfaces/PhotoBoothDetail.interface';
import {
  PhotoBoothEventContainer,
  TitleContainer,
} from '../../styles/layout/photobooth-detail/PhotoBoothEvent.style';
import {SubTitleText} from '../../styles/layout/reuse/text/Text.style';
import {SmallText} from '../../styles/layout/reuse/text/Text.style';
import PhotoBoothEventFrame from './PhotoBoothEventFrame';
import {TouchableOpacity} from 'react-native';
import SearchNoData from '../reuse/alert/SearchNoData';
import {NormalButton} from '../reuse/button/NormalButton';
import MoreEventModal from './MoreEventModal';

export default function PhotoBoothEvent({eventData}: PhotoBoothEventProps) {
  const [showMoreEventModal, setShowMoreEventModal] = useState(false);

  const onMoreClick = () => {
    setShowMoreEventModal(true);
  };

  const closeModal = () => {
    setShowMoreEventModal(false);
  };

  const onPressButton = () => {
    // 이벤트 보러가기 페이지로 이동
  };

  return (
    <PhotoBoothEventContainer>
      <TitleContainer>
        <SubTitleText>E V E N T</SubTitleText>
        {eventData.length > 1 && (
          <TouchableOpacity onPress={onMoreClick}>
            <SmallText>더보기</SmallText>
          </TouchableOpacity>
        )}
      </TitleContainer>

      {eventData.length > 0 ? (
        <PhotoBoothEventFrame key={eventData[0].eventID} event={eventData[0]} />
      ) : (
        <>
          <SearchNoData
            alertText="등록된 이벤트가 없습니다."
            recommendText="다른 이벤트를 구경해 보세요!"
          />
          <NormalButton
            text="내 주변 포토부스 보러가기"
            onPress={onPressButton}
          />
        </>
      )}

      <MoreEventModal
        visible={showMoreEventModal}
        onClose={closeModal}
        eventData={eventData}
      />
    </PhotoBoothEventContainer>
  );
}
