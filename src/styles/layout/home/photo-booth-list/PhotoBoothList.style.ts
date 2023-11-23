import styled from 'styled-components/native';
import {colors} from '../../../base/Variable';
import {Dimensions} from 'react-native';

export const PhotoBoothListContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

// 데이터 없을 경우 정렬을 위한 더미 영역
export const DummyArea = styled.View`
  width: ${Dimensions.get('window').width * 0.45}px;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 15px;
  background-color: ${colors.black};
`;
