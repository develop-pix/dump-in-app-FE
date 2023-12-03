import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../../base/Variable';

export const SearchResultContainer = styled.View`
  width: 100%;
`;

export const EventTitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
`;

export const EventTitle = styled.Text`
  color: ${colors.first_grey};
  font-size: ${fontSize.T2};
  font-weight: ${fontWeight.SB};
`;

export const MoreText = styled.Text`
  color: ${colors.first_grey};
  font-size: ${fontSize.H3};
  font-weight: ${fontWeight.M};
`;

export const PhotoDumpTitle = styled.Text`
  margin: 30px 20px 10px;
  color: ${colors.first_grey};
  font-size: ${fontSize.T2};
  font-weight: ${fontWeight.SB};
`;

export const PhotoDumpUpScrollImageBox = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50px);
  z-index: 999;
  elevation: 999;
`;
