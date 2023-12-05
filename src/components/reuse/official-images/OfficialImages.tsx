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
import SearchNoData from '../alert/SearchNoData';

export default function OfficialImages({image}: OfficialImageProps) {
  return (
    <OfficialContainer>
      <SubTitleContainer>
        <FontWhiteSmallerThickWithLineSpacing>
          OFFICIAL
        </FontWhiteSmallerThickWithLineSpacing>
      </SubTitleContainer>
      {image.length === 0 ? (
        <SearchNoData alertText="등록된 이미지가 없습니다." recommendText="" />
      ) : (
        <OfficialImagesContainer>
          {image.map((url, index) => {
            return (
              <OfficialImageWrapper key={index}>
                <OfficialImage source={{uri: url}} />
              </OfficialImageWrapper>
            );
          })}
        </OfficialImagesContainer>
      )}
    </OfficialContainer>
  );
}
