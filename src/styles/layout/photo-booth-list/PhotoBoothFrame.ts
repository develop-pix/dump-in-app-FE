import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {colors} from '../../base/Variable';

export const PhotoBoothFrameContainer = styled.View`
  width: ${Dimensions.get('window').width * 0.48}px;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 15px;
  padding: 10px;
  background-color: white;
`;

export const FrameImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const TagImage = styled.Image`
  position: absolute;
  right: 20px;
  width: 40px;
  height: 30px;
`;

export const PhotoBoothInfo = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const PhotoBoothNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LocationIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-left: 5px;
`;

export const PhotoBoothName = styled.Text`
  color: ${colors.first_grey};
  padding-top: 10px;
  padding-bottom: 10px;
`;