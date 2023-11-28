import React from 'react';
import {MoreEventResultProps} from '../../../interfaces/HomeSearch.interface';
import EventResult from './EventResult';
import CloseModalButton from '../../reuse/button/CloseModalButton';
import {
  ModalContainer,
  EventTitleContainer,
  EventTitle,
  EventCount,
} from '../../../styles/layout/home-search/search-result/MoreEventResult.style';
import {ScrollView} from 'react-native';

export default function MoreEventResult({
  eventData,
  searchData,
  closeMoreEventModal,
}: MoreEventResultProps) {
  return (
    <ModalContainer>
      <ScrollView>
        <CloseModalButton setModal={closeMoreEventModal} />
        <EventTitleContainer>
          <EventTitle>Event</EventTitle>
          <EventCount>검색 결과 {eventData.length}개</EventCount>
        </EventTitleContainer>
        {eventData.map(data => (
          <EventResult searchData={searchData} key={data.eventID} data={data} />
        ))}
      </ScrollView>
    </ModalContainer>
  );
}
