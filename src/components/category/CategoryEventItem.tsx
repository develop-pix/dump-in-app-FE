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
  FontWhiteSmallerThin,
  FontWhiteGreySmallerThin,
  FontWhiteBiggestThick,
} from '../../styles/layout/reuse/text/Text.style';
import {CategoryEventItemProps} from '../../interfaces/Category.interface';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../interfaces/NavigationBar';

export default function CategoryEventItem({eventData}: CategoryEventItemProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const onPressEvent = (id: number) => {
    if (isFocused) {
      navigation.push('EventDetail', {eventID: id});
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
          colors={['transparent', colors.fourth_grey]}
          locations={[0.1, 0.8]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 200,
          }}
        />

        <FavoirteIcon>
          <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
        </FavoirteIcon>

        <EventInfo>
          <PhotoBoothNameContainer>
            <LocationIcon source={LocationImage} />
            <FontWhiteSmallerThin>
              {eventData.photoboothName}
            </FontWhiteSmallerThin>
          </PhotoBoothNameContainer>
          <EventTitleContainer>
            <FontWhiteBiggestThick>
              {eventData.eventTitle}
            </FontWhiteBiggestThick>
          </EventTitleContainer>
          <FontWhiteGreySmallerThin>
            {eventData.startDate + ' ~ ' + eventData.endDate}
          </FontWhiteGreySmallerThin>
        </EventInfo>
      </EventImageWrapper>
    </EventItemContainer>
  );
}
