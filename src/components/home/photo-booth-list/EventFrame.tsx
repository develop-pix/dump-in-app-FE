import React from 'react';
import {EventFrameProps} from '../../../interfaces/Home.interface';
import NewEventImage from '../../../assets/image/reuse/new.png';
import {
  EventFrameContainer,
  EventFrameImage,
  TagImage,
} from '../../../styles/layout/home/photo-booth-list/EventFrame.style';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';

export default function EventFrame({data}: EventFrameProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const onPressEvent = () => {
    if (!isFocused) {
      return;
    }
    navigation.push('EventDetail', {eventID: data.eventID});
  };

  return (
    <EventFrameContainer activeOpacity={0.9} onPress={onPressEvent}>
      <EventFrameImage source={{uri: data.representativeImage}} />
      <TagImage source={NewEventImage} />
    </EventFrameContainer>
  );
}
