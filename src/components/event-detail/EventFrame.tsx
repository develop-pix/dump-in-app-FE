import React from 'react';
import {EventFrameProps} from '../../interfaces/EventDetail.interface';
import {
  FrameContainer,
  SubTitleContainer,
  FrameTitle,
  FrameImageContainer,
  FrameImageWrapper,
  FrameImage,
} from '../../styles/layout/event-detail/EventFrame.style';

export default function EventFrame({eventData}: EventFrameProps) {
  return (
    <FrameContainer>
      <SubTitleContainer>
        <FrameTitle>F R A M E</FrameTitle>
      </SubTitleContainer>

      <FrameImageContainer>
        {eventData.frameImage.map((image, index) => (
          <FrameImageWrapper key={index}>
            <FrameImage source={{uri: image}} />
          </FrameImageWrapper>
        ))}
      </FrameImageContainer>
    </FrameContainer>
  );
}
