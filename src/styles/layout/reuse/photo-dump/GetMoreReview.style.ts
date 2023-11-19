import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {colors} from '../../../base/Variable';

export const GetMoreReviewContainer = styled.View`
  width: ${Dimensions.get('window').width * 0.8}px;
  height: ${Dimensions.get('window').width * 0.8}px;
  border-radius: 10px;
  background-color: ${colors.second_grey};
  jsutify-content: center;
`;
