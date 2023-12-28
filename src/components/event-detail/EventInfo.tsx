import React from 'react';
import {EventInfoProps} from '../../interfaces/EventDetail.interface';
import {
  EventInfoContainer,
  InfoContainer,
  InfoDateContainer,
  CalenderIconContainer,
  InfoTitleContainer,
  InfoDescriptionContainer,
} from '../../styles/layout/event-detail/EventInfo.style';
import {
  FontLightGreySmallerMedium,
  FontWhiteGreySmallerSemibold,
  FontLightGreySmallerSemibold,
} from '../../styles/layout/reuse/text/Text.style';
import CalenderIcon from '../../assets/image/icon/calendar.svg';
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
          <CalenderIconContainer>
            <CalenderIcon width={16} height={21} />
          </CalenderIconContainer>
          <FontLightGreySmallerMedium>
            {eventData.startDate} ~ {eventData.endDate}
          </FontLightGreySmallerMedium>
        </InfoDateContainer>
      </InfoContainer>
    </EventInfoContainer>
  );
}
