import React from 'react';
import {EventFrameProps} from '../../interfaces/EventDetail.interface';
import {
  FrameContainer,
  SubTitleContainer,
  FrameImageContainer,
  FrameImageWrapper,
  FrameImage,
} from '../../styles/layout/event-detail/EventFrame.style';
import {FontWhiteSmallerSemiboldWithLineSpacing} from '../../styles/layout/reuse/text/Text.style';

export default function EventFrame({eventData}: EventFrameProps) {
  return (
    <FrameContainer>
      <SubTitleContainer>
        <FontWhiteSmallerSemiboldWithLineSpacing>
          FRAME
        </FontWhiteSmallerSemiboldWithLineSpacing>
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
