import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
import { EventImageTitleProps } from 'interfaces/EventDetail.interface';
import { colors } from 'styles/base/Variable';
import {
    ContentsContainer,
    EventImage,
    EventImageContentContainer,
    EventImageTitleContainer,
    TitleContainer,
} from 'styles/layout/event-detail/EventImageTitle.style';
import { FontWhiteBiggestSemibold, FontYellowSmallerMediumWithLineSpacing } from 'styles/layout/reuse/text/Text.style';
import { ReviewDescBottom } from 'styles/layout/review-detail/ReviewDetail.style';
import { TagsArrayToHashTagArrayForm } from 'utils/FormChange';

export default function ImageTitle({ eventData }: EventImageTitleProps) {
    const [favorite, setFavorite] = useState<boolean>(eventData.myEvent);
    return (
        <EventImageTitleContainer>
            <EventImage source={{ uri: eventData.representativeImage }}>
                <LinearGradient
                    colors={['transparent', colors.lightblack]}
                    locations={[0.1, 0.7]}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 200,
                    }}
                />
            </EventImage>

            <EventImageContentContainer>
                <ContentsContainer>
                    <TitleContainer>
                        <FontWhiteBiggestSemibold>{eventData.eventTitle}</FontWhiteBiggestSemibold>
                        <FavoriteButton favorite={favorite} setFavorite={setFavorite} />
                    </TitleContainer>

                    <ReviewDescBottom>
                        {TagsArrayToHashTagArrayForm(eventData.hashtag).map(tag => (
                            <FontYellowSmallerMediumWithLineSpacing key={tag}>
                                {tag}
                            </FontYellowSmallerMediumWithLineSpacing>
                        ))}
                    </ReviewDescBottom>
                </ContentsContainer>
            </EventImageContentContainer>
        </EventImageTitleContainer>
    );
}
