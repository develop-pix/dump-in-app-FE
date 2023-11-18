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

export const PhotoCarusel = styled.ScrollView``;

export const ReviewWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Reviews = styled.View`
  width: ${Dimensions.get('window').width}px;
  align-items: center;
`;
