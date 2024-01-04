import CalenderIcon from 'assets/image/icon/calendar.svg';
import { EventInfoProps } from 'interfaces/EventDetail.interface';
import {
    CalenderIconContainer,
    EventInfoContainer,
    InfoContainer,
    InfoDateContainer,
    InfoDescriptionContainer,
    InfoTitleContainer,
} from 'styles/layout/event-detail/EventInfo.style';
import {
    FontLightGreySmallerMedium,
    FontLightGreySmallerSemibold,
    FontWhiteGreySmallerSemibold,
    FontWhiteSmallerSemiboldWithLineSpacing,
} from 'styles/layout/reuse/text/Text.style';

export default function EventInfo({ eventData }: EventInfoProps) {
    return (
        <EventInfoContainer>
            <FontWhiteSmallerSemiboldWithLineSpacing>INFO</FontWhiteSmallerSemiboldWithLineSpacing>

            <InfoContainer>
                <InfoTitleContainer>
                    <FontWhiteGreySmallerSemibold>{eventData.descriptionTitle}</FontWhiteGreySmallerSemibold>
                </InfoTitleContainer>
                <InfoDescriptionContainer>
                    <FontLightGreySmallerSemibold>{eventData.description}</FontLightGreySmallerSemibold>
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
