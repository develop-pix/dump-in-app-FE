import React from 'react';
import {EventInfoProps} from '../../interfaces/EventDetail.interface';
import {
  EventInfoContainer,
  InfoContainer,
  InfoDateContainer,
  CalenderIcon,
  InfoTitleContainer,
  InfoDescriptionContainer,
} from '../../styles/layout/event-detail/EventInfo.style';
import {
  FontLightGreySmallerThin,
  FontWhiteGreySmallerThick,
  FontLightGreySmallerThick,
} from '../../styles/layout/reuse/text/Text.style';
import CalenderImage from '../../assets/image/reuse/calender.png';
import {FontWhiteSmallerThickWithLineSpacing} from '../../styles/layout/reuse/text/Text.style';

export default function EventInfo({eventData}: EventInfoProps) {
  return (
    <EventInfoContainer>
      <FontWhiteSmallerThickWithLineSpacing>
        INFO
      </FontWhiteSmallerThickWithLineSpacing>

      <InfoContainer>
        <InfoTitleContainer>
          <FontWhiteGreySmallerThick>
            {eventData.desciptionTitle}
          </FontWhiteGreySmallerThick>
        </InfoTitleContainer>
        <InfoDescriptionContainer>
          <FontLightGreySmallerThick>
            {eventData.desciption}
          </FontLightGreySmallerThick>
        </InfoDescriptionContainer>

        <InfoDateContainer>
          <CalenderIcon source={CalenderImage} />
          <FontLightGreySmallerThin>
            {eventData.startDate} ~ {eventData.endDate}
          </FontLightGreySmallerThin>
        </InfoDateContainer>
      </InfoContainer>
    </EventInfoContainer>
  );
}
