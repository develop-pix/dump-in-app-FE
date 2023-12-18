import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../../base/Variable';

export const LocationInputContainer = styled.View`
  width: 47%;
  flex-direction: column;
  gap: 10px;
`;

export const LocationInputButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: ${colors.blackgrey};
  justify-content: center;
  padding-left: 10px;
`;

export const LocationTextButton = styled.TouchableOpacity`
  color: ${colors.white};
  font-size: ${fontSize.smaller};
  font-weight: ${fontWeight.medium};
  line-height: 14px;
`;

export const LocationTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const LocationImage = styled.Image`
  width: 16px;
  height: 16px;
`;
