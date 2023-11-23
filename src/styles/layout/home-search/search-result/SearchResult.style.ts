import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../../base/Variable';

export const SearchResultContainer = styled.View`
  width: 100%;
`;

export const PhotoDumpTitle = styled.Text`
  margin: 30px 20px 10px;
  color: ${colors.first_grey};
  font-size: ${fontSize.H5};
  font-weight: ${fontWeight.SB};
`;

export const PhotoDumpContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
