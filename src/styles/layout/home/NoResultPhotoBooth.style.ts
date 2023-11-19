import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../base/Variable';

export const NoResultPhotoBoothContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const AlertIcon = styled.Image`
  margin-bottom: 12px;
  width: 24px;
  height: 24px;
`;

export const NoResultText = styled.Text`
  color: ${colors.first_grey};
  font-size: ${fontSize.H3};
  font-weight: ${fontWeight.M};
  margin-bottom: 12px;
`;

export const NoResultSubText = styled.Text`
  color: ${colors.second_grey};
  font-size: ${fontSize.B2};
  font-weight: ${fontWeight.M};
  margin-bottom: 12px;
`;
