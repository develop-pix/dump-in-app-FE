import React from 'react';
import {
  OfficialContainer,
  SubTitleContainer,
  OfficialImage,
  OfficialImageWrapper,
  OfficialImagesContainer,
} from '../../../styles/layout/reuse/offcial-images/OfficialImages.style';
import {FontWhiteSmallerThickWithLineSpacing} from '../../../styles/layout/reuse/text/Text.style';
import {OfficialImageProps} from '../../../interfaces/reuse/official-image/OfficialImage.interface';

export default function OfficialImages({image}: OfficialImageProps) {
  return (
    <>
      {image.length !== 0 ? (
        <OfficialContainer>
          <SubTitleContainer>
            <FontWhiteSmallerThickWithLineSpacing>
              OFFICIAL
            </FontWhiteSmallerThickWithLineSpacing>
          </SubTitleContainer>
          <OfficialImagesContainer>
            {image.map((url, index) => {
              return (
                <OfficialImageWrapper key={index}>
                  <OfficialImage source={{uri: url}} />
                </OfficialImageWrapper>
              );
            })}
          </OfficialImagesContainer>
        </OfficialContainer>
      ) : null}
    </>
  );
}
