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
  EventImage,
  ContentsContainer,
  TitleContainer,
} from '../../styles/layout/event-detail/EventImageTitle.style';
import {GoBackButtonContainer} from '../../styles/layout/reuse/button/GoBackButton.style';
import {Platform} from 'react-native';

export default function ImageTitle({eventData}: EventImageTitleProps) {
  const [favorite, setFavorite] = useState<boolean>(eventData.myEvent);
  const platform = Platform.OS;
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
        <GoBackButtonContainer platform={platform}>
          <GoBackButton />
        </GoBackButtonContainer>

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
