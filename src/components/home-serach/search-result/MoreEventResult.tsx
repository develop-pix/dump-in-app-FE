import React from 'react';
import {MoreEventResultProps} from '../../../interfaces/HomeSearch.interface';
import EventResult from './EventResult';
import CloseModalButton from '../../reuse/button/CloseModalButton';
import {
  ModalContainer,
  EventTitleContainer,
} from '../../../styles/layout/home-search/search-result/MoreEventResult.style';
import {ScrollView} from 'react-native';
import {
  FontWhiteGreySmallestThick,
  FontWhiteGreySmallerThick,
} from '../../../styles/layout/reuse/text/Text.style';

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
          <FontWhiteGreySmallerThick>Event</FontWhiteGreySmallerThick>
          <FontWhiteGreySmallestThick>
            검색 결과 {eventData.length}개
          </FontWhiteGreySmallestThick>
        </EventTitleContainer>
        {eventData.map(data => (
          <EventResult searchData={searchData} key={data.eventID} data={data} />
        ))}
      </ScrollView>
    </ModalContainer>
  );
}
