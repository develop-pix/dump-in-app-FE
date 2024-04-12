import { EventFrameProps } from 'interfaces/EventDetail.interface';
import {
    FrameContainer,
    FrameImage,
    FrameImageContainer,
    FrameImageWrapper,
    SubTitleContainer,
} from 'styles/layout/event-detail/EventFrame.style';
import { FontWhiteSmallerSemiboldWithLineSpacing } from 'styles/layout/reuse/text/Text.style';

export default function EventFrame({ image }: EventFrameProps) {
    return (
        <FrameContainer>
            <SubTitleContainer>
                <FontWhiteSmallerSemiboldWithLineSpacing>FRAME</FontWhiteSmallerSemiboldWithLineSpacing>
            </SubTitleContainer>

            <FrameImageContainer>
                {image.map(imageData => (
                    <FrameImageWrapper key={imageData.id}>
                        <FrameImage source={{ uri: imageData.imageUrl }} />
                    </FrameImageWrapper>
                ))}
            </FrameImageContainer>
        </FrameContainer>
    );
}
