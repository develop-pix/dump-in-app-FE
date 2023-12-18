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
  FontLightGreySmallerMedium,
  FontWhiteGreySmallerSemibold,
  FontLightGreySmallerSemibold,
} from '../../styles/layout/reuse/text/Text.style';
import CalenderImage from '../../assets/image/reuse/calender.png';
import {FontWhiteSmallerSemiboldWithLineSpacing} from '../../styles/layout/reuse/text/Text.style';

export default function EventInfo({eventData}: EventInfoProps) {
  return (
    <EventInfoContainer>
      <FontWhiteSmallerSemiboldWithLineSpacing>
        INFO
      </FontWhiteSmallerSemiboldWithLineSpacing>

      <InfoContainer>
        <InfoTitleContainer>
          <FontWhiteGreySmallerSemibold>
            {eventData.desciptionTitle}
          </FontWhiteGreySmallerSemibold>
        </InfoTitleContainer>
        <InfoDescriptionContainer>
          <FontLightGreySmallerSemibold>
            {eventData.desciption}
          </FontLightGreySmallerSemibold>
        </InfoDescriptionContainer>

        <InfoDateContainer>
          <CalenderIcon source={CalenderImage} />
          <FontLightGreySmallerMedium>
            {eventData.startDate} ~ {eventData.endDate}
          </FontLightGreySmallerMedium>
        </InfoDateContainer>
      </InfoContainer>
    </EventInfoContainer>
  );
}
