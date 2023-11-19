import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

/* PhotoDump */

export const PhotoDumpContainer = styled.View`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const SubTitleContainer = styled.View`
  width: 90%;
`;

export const OfficialImagesContainer = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 11px;
  flex-wrap: wrap;
`;
export const CarouselContainer = styled.View`
  width: 100%;
`;

export const ReviewWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Reviews = styled.View`
  width: ${Dimensions.get('window').width * 0.8}px;
  align-items: center;
  margin-left: ${Dimensions.get('window').width * 0.02}px;
  margin-right: ${Dimensions.get('window').width * 0.02}px;
`;
