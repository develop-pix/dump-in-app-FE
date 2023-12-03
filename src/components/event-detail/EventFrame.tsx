import React from 'react';
import {EventFrameProps} from '../../interfaces/EventDetail.interface';
import {
  FrameContainer,
  FrameImageContainer,
  FrameImage,
} from '../../styles/layout/event-detail/EventFrame.style';
import {FontWhiteSmallerThickWithLineSpacing} from '../../styles/layout/reuse/text/Text.style';

export default function EventFrame({eventData}: EventFrameProps) {
  return (
    <FrameContainer>
      <FontWhiteSmallerThickWithLineSpacing>
        FRAME
      </FontWhiteSmallerThickWithLineSpacing>

      <FrameImageContainer>
        {eventData.frameImage.map((image, index) => (
          <FrameImage key={index} source={{uri: image}} />
        ))}
      </FrameImageContainer>
    </FrameContainer>
  );
}
