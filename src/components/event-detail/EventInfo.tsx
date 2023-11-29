import React from 'react';
import {EventInfoProps} from '../../interfaces/EventDetail.interface';
import {
  EventInfoContainer,
  InfoContainer,
  InfoTitle,
  InfoDescription,
  InfoDateContainer,
  CalenderIcon,
} from '../../styles/layout/event-detail/EventInfo.style';
import {InfoDateText} from '../../styles/layout/reuse/text/Text.style';
import CalenderImage from '../../assets/image/reuse/calender.png';
import {SubTitleText} from '../../styles/layout/reuse/text/Text.style';

export default function EventInfo({eventData}: EventInfoProps) {
  return (
    <EventInfoContainer>
      <SubTitleText>I N F O</SubTitleText>

      <InfoContainer>
        <InfoTitle>{eventData.desciptionTitle}</InfoTitle>
        <InfoDescription>{eventData.desciption}</InfoDescription>

        <InfoDateContainer>
          <CalenderIcon source={CalenderImage} />
          <InfoDateText>
            {eventData.startDate} ~ {eventData.endDate}
          </InfoDateText>
        </InfoDateContainer>
      </InfoContainer>
    </EventInfoContainer>
  );
}
