import React, {useState} from 'react';
import FavoirteButton from '../reuse/button/FavoritetButton';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../styles/base/Variable';
import LocationImage from '../../assets/image/reuse/location_white.png';
import {
  EventItemContainer,
  EventImage,
  EventImageWrapper,
  FavoirteIcon,
  EventInfo,
  PhotoBoothNameContainer,
  LocationIcon,
  EventTitleContainer,
} from '../../styles/layout/category/CategoryEventItem.style';
import {
  FontWhiteSmallerMedium,
  FontWhiteGreySmallerMedium,
  FontWhiteBiggestSemibold,
} from '../../styles/layout/reuse/text/Text.style';
import {CategoryEventItemProps} from '../../interfaces/Category.interface';
import {useNavigation, useIsFocused, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../interfaces/NavigationBar';
import {ScreenName} from '../../interfaces/NavigationBar';

export default function CategoryEventItem({eventData}: CategoryEventItemProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const route = useRoute();

  const onPressEvent = (id: number) => {
    const currentScreen = (route.params as {screen: ScreenName}).screen;
    if (isFocused) {
      navigation.push('EventDetail', {eventID: id, screen: currentScreen});
    }
  };

  const [favorite, setFavorite] = useState<boolean>(eventData.myEvent);

  return (
    <EventItemContainer
      key={eventData.eventID}
      onPress={() => onPressEvent(eventData.eventID)}>
      <EventImageWrapper>
        <EventImage source={{uri: eventData.representativeImage}} />
        <LinearGradient
          colors={['transparent', colors.lightblack]}
          locations={[0.1, 1]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 400,
          }}
        />

        <FavoirteIcon>
          <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
        </FavoirteIcon>

        <EventInfo>
          <PhotoBoothNameContainer>
            <LocationIcon source={LocationImage} />
            <FontWhiteSmallerMedium>
              {eventData.photoboothName}
            </FontWhiteSmallerMedium>
          </PhotoBoothNameContainer>
          <EventTitleContainer>
            <FontWhiteBiggestSemibold>
              {eventData.eventTitle}
            </FontWhiteBiggestSemibold>
          </EventTitleContainer>
          <FontWhiteGreySmallerMedium>
            {eventData.startDate + ' ~ ' + eventData.endDate}
          </FontWhiteGreySmallerMedium>
        </EventInfo>
      </EventImageWrapper>
    </EventItemContainer>
  );
}
