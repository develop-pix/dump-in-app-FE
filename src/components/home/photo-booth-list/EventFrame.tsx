import React from 'react';
import {EventFrameProps} from '../../../interfaces/Home.interface';
import NewEventImage from '../../../assets/image/reuse/new.png';
import {
  EventFrameContainer,
  EventFrameImage,
  TagImage,
} from '../../../styles/layout/home/photo-booth-list/EventFrame.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';

export default function EventFrame({data}: EventFrameProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const onPressReview = () => {
    navigation.push('EventDetail', {eventID: data.eventID});
  };

  return (
    <EventFrameContainer activeOpacity={0.9} onPress={onPressReview}>
      <EventFrameImage source={{uri: data['representative-image']}} />
      <TagImage source={NewEventImage} />
    </EventFrameContainer>
  );
}
