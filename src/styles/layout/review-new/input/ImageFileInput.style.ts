import styled from 'styled-components/native';
import {colors} from '../../../base/Variable';

export const ImageFileInputContainer = styled.View`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${colors.darkgrey};
  margin-bottom: 20px;
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
