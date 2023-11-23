import React from 'react';
import {EventFrameProps} from '../../../interfaces/Home.interface';
import NewEventImage from '../../../assets/image/reuse/new.png';
import {
  EventFrameContainer,
  EventFrameImage,
  TagImage,
} from '../../../styles/layout/home/photo-booth-list/EventFrame.style';

export default function EventFrame({data}: EventFrameProps) {
  return (
    <EventFrameContainer>
      <EventFrameImage source={{uri: data['representative-image']}} />

      {data['new-event'] && <TagImage source={NewEventImage} />}
    </EventFrameContainer>
  );
}
