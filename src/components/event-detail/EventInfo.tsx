import RenderHTML from 'react-native-render-html';

import CalenderIcon from 'assets/image/icon/calendar.svg';
import { EventInfoProps } from 'interfaces/EventDetail.interface';
import {
    CalenderIconContainer,
    EventInfoContainer,
    InfoContainer,
    InfoDateContainer,
    InfoDescriptionContainer,
} from 'styles/layout/event-detail/EventInfo.style';
import {
    FontLightGreySmallerMedium,
    FontWhiteSmallerSemiboldWithLineSpacing,
} from 'styles/layout/reuse/text/Text.style';

export default function EventInfo({ content, startDate, endDate }: EventInfoProps) {
    const source = {
        html: `${content}`,
    };

    return (
        <EventInfoContainer>
            <FontWhiteSmallerSemiboldWithLineSpacing>INFO</FontWhiteSmallerSemiboldWithLineSpacing>
            <InfoContainer>
                <InfoDescriptionContainer>
                    <RenderHTML source={source} contentWidth={100} />
                </InfoDescriptionContainer>

                <InfoDateContainer>
                    <CalenderIconContainer>
                        <CalenderIcon width={16} height={21} />
                    </CalenderIconContainer>
                    <FontLightGreySmallerMedium>
                        {startDate} ~ {endDate}
                    </FontLightGreySmallerMedium>
                </InfoDateContainer>
            </InfoContainer>
        </EventInfoContainer>
    );
}
