import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {colors, fontWeight, fontSize} from '../../../base/Variable';

export const ReviewFrameContainer = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width * 0.45}px;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 15px;
  background-color: ${colors.white};
`;

export const ReviewFrameImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ReviewInfo = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ReviewNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LocationIcon = styled.Image`
  width: 18px;
  height: 21px;
  margin-right: 5px;
  margin-left: 5px;
`;

export const ReviewName = styled.Text`
  color: ${colors.first_grey};
  font-weight: ${fontWeight.M};
  font-size: ${fontSize.B2};
  padding-top: 8px;
  padding-bottom: 10px;
`;
