import React from 'react';
import {EventFrameProps} from '../../../interfaces/Home.interface';
import NewEventImage from '../../../assets/image/reuse/new.png';
import LinearGradient from 'react-native-linear-gradient';
import {
  EventFrameContainer,
  EventFrameImage,
  TagImage,
} from '../../../styles/layout/home/photo-booth-list/EventFrame.style';
import {colors} from '../../../styles/base/Variable';

export default function EventFrame({data}: EventFrameProps) {
  return (
    <EventFrameContainer>
      <EventFrameImage source={{uri: data['representative-image']}} />
      <LinearGradient
        colors={['transparent', colors.black]}
        locations={[0.1, 1]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 130,
        }}
      />

      {data['new-event'] && <TagImage source={NewEventImage} />}
    </EventFrameContainer>
  );
}
