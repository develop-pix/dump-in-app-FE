import React, {useState} from 'react';
import FavoirteButton from '../reuse/button/FavoritetButton';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../styles/base/Variable';
import {
  EventItem,
  EventImage,
  EventImageWrapper,
  EventInfo,
  FavoirteIcon,
  EventTitleContainer,
} from '../../styles/layout/photobooth-detail/PhotoBoothEventFrame.style';
import {
  FontWhiteBiggestSemibold,
  FontWhiteGreySmallerMedium,
} from '../../styles/layout/reuse/text/Text.style';
import {PhotoBoothEventFrameProps} from '../../interfaces/PhotoBoothDetail.interface';
import {useNavigation, useIsFocused, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../interfaces/NavigationBar';
import {ScreenName} from '../../interfaces/NavigationBar';

export default function PhotoBoothEventFrame({
  event,
}: PhotoBoothEventFrameProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const route = useRoute();

  const onPressEvent = (id: number) => {
    const currentScreen = (route.params as {screen: ScreenName}).screen;
    if (isFocused) {
      navigation.push('EventDetail', {eventID: id, screen: currentScreen});
    }
  };

  const [favorite, setFavorite] = useState<boolean>(event.myEvent);

  return (
    <EventItem key={event.eventID} onPress={() => onPressEvent(event.eventID)}>
      <EventImageWrapper>
        <EventImage source={{uri: event.representativeImage}} />
        <LinearGradient
          colors={['transparent', colors.lightblack]}
          locations={[0.1, 1]}
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
          <EventTitleContainer>
            <FontWhiteBiggestSemibold>
              {event.eventTitle}
            </FontWhiteBiggestSemibold>
          </EventTitleContainer>
          <FontWhiteGreySmallerMedium>{`${event.startDate} ~ ${event.endDate}`}</FontWhiteGreySmallerMedium>
        </EventInfo>
      </EventImageWrapper>
    </EventItem>
  );
}
