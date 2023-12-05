import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../base/Variable';

export const FrameContainer = styled.View`
  padding-bottom: 120px;
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const SubTitleContainer = styled.View`
  width: 90%;
`;

export const FrameTitle = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.H5};
  font-weight: ${fontWeight.SB};
`;

export const FrameImageContainer = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 11px;
  flex-wrap: wrap;
`;

export const FrameImageWrapper = styled.View`
  width: 48%;
`;

export const FrameImage = styled.Image`
  background-color: ${colors.white};
  object-fit: contain;
  width: 100%;
  aspect-ratio: 0.8;
  border-radius: 10px;
`;
