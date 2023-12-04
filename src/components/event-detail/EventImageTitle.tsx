import React, {useState} from 'react';
import GoBackButton from '../reuse/button/GoBackButton';
import FavoirteButton from '../reuse/button/FavoritetButton';
import {TagsArrayToHashTagArrayForm} from '../../utils/FormChange';
import {
  FontWhiteBiggestThick,
  FontYellowSmallerThinWithLineSpacing,
} from '../../styles/layout/reuse/text/Text.style';
import {ReviewDescBottom} from '../../styles/layout/review-detail/ReviewDetail.style';
import {EventImageTitleProps} from '../../interfaces/EventDetail.interface';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../styles/base/Variable';
import {
  EventImageTitleContainer,
  EventImageContentContainer,
  ButtonContainer,
  EventImage,
  ContentsContainer,
  TitleContainer,
} from '../../styles/layout/event-detail/EventImageTitle.style';

export default function ImageTitle({eventData}: EventImageTitleProps) {
  const [favorite, setFavorite] = useState<boolean>(eventData.myEvent);

  return (
    <EventImageTitleContainer>
      <EventImage source={{uri: eventData.representativeImage}}>
        <LinearGradient
          colors={['transparent', colors.black]}
          locations={[0.1, 1]}
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
        <ButtonContainer>
          <GoBackButton />
        </ButtonContainer>

        <ContentsContainer>
          <TitleContainer>
            <FontWhiteBiggestThick>
              {eventData.eventTitle}
            </FontWhiteBiggestThick>
            <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
          </TitleContainer>

          <ReviewDescBottom>
            {TagsArrayToHashTagArrayForm(eventData.hashtag).map(tag => (
              <FontYellowSmallerThinWithLineSpacing key={tag}>
                {tag}
              </FontYellowSmallerThinWithLineSpacing>
            ))}
          </ReviewDescBottom>
        </ContentsContainer>
      </EventImageContentContainer>
    </EventImageTitleContainer>
  );
}
