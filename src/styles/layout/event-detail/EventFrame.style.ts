import styled from 'styled-components/native';
import {colors} from '../../base/Variable';

export const FrameContainer = styled.View`
  padding-bottom: 120px;
`;

export const FrameImageContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const FrameImage = styled.Image`
  width: 45%;
  height: 215px;
  background-color: ${colors.white};
  margin-top: 8px;
  border-radius: 10px;
`;
