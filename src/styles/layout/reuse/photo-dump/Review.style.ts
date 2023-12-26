import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {colors} from '../../../base/Variable';

export const ReviewContainer = styled.TouchableOpacity`
  border-radius: 10px;
  width: ${Dimensions.get('window').width * 0.8}px;
  aspect-ratio: 1;
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: ${colors.white};
`;

export const ReviewImage = styled.Image`
  width: 100%;
  height: 100%;
`;

/* left: ReviewContainer width의 1/2 */
export const ReviewDescriptionContainer = styled.View`
  display: flex;
  gap: 20px;
  width: 90%;
  position: absolute;
  bottom: 10px;
  left: ${Dimensions.get('window').width * 0.05}px;
`;

export const ReviewDescription = styled.View``;

export const ReviewHashtags = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
