import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {colors} from '../../../base/Variable';

// 임시 배경색 설정, 이미지 사이즈는 리뷰마다 차이가 있으므로 비율값 디자인팀에게 받아서 수정 필요
export const PhotoBoothFrameContainer = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width * 0.45}px;
  height: ${Dimensions.get('window').width * 0.45}px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${colors.white};
`;

export const PhotoBoothFrameImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const TagImage = styled.Image`
  position: absolute;
  left: 118px;
  width: 42px;
  height: 32px;
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
  margin-bottom: 10px;
`;

export const LocationIcon = styled.Image`
  width: 18px;
  height: 21px;
  margin-right: 5px;
  margin-left: 5px;
`;
