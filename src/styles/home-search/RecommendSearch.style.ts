import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../base/Variable';

export const RecommendSearchContainer = styled.View`
  padding: 24px 20px 0px 20px;
`;

export const RecommendSearchTitle = styled.Text`
  color: ${colors.first_grey};
  font-size: ${fontSize.H5};
  font-weight: ${fontWeight.SB};
`;

export const RecommendSearchContentContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  width: 335px;
`;

export const RecommendSearchButton = styled.TouchableOpacity`
  height: 36px;
  padding: 4px 14px 4px 14px;
  border-radius: 8px;
  background-color: ${colors.fourth_grey};
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const RecommendSearchText = styled.Text`
  color: ${colors.yellow};
  font-size: ${fontSize.B2};
  font-weight: ${fontWeight.M};
`;
