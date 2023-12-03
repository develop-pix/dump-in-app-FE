import React from 'react';
import {EventFrameProps} from '../../interfaces/EventDetail.interface';
import {
  FrameContainer,
  FrameTitle,
  FrameImageContainer,
  FrameImage,
} from '../../styles/layout/event-detail/EventFrame.style';

export default function EventFrame({eventData}: EventFrameProps) {
  return (
    <FrameContainer>
      <FrameTitle>F R A M E</FrameTitle>

      <FrameImageContainer>
        {eventData.frameImage.map((image, index) => (
          <FrameImage key={index} source={{uri: image}} />
        ))}
      </FrameImageContainer>
    </FrameContainer>
  );
}
