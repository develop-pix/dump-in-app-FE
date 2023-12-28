import styled from 'styled-components/native';
import {colors} from '../../../base/Variable';

export const ImageFileInputContainer = styled.View`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${colors.darkgrey};
  margin-bottom: 20px;
  align-items: center;
`;

export const NoDataImageContainer = styled.TouchableOpacity`
  height: 100%;
  aspect-ratio: 0.7;
`;

export const PreviewImageContainer = styled.View`
  height: 100%;
  aspect-ratio: 0.7;
`;

export const PreviewNoImage = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${colors.blackgrey};
  align-items: center;
  justify-content: center;
`;

export const PreviewImage = styled.Image`
  height: 100%;
  width: 100%;
  background-color: ${colors.blackgrey};
  object-fit: cover;
`;

export const ReviewErrorContainerFileInput = styled.View`
  position: absolute;
  bottom: 55px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const ImageUploadButtonContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ImageUploadButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 0px 13px;
  height: 30px;
  background-color: ${colors.black};
  opacity: 0.6;
  border-radius: 8px;
`;
