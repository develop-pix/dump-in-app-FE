import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../../base/Variable';

export const EventResultContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0px 20px;
  border-bottom-width: 1px;
  border-color: ${colors.third_grey};
`;

export const EventListInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
`;

export const EventListIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-top: 4px;
  margin-right: 10px;
`;

export const EventListText = styled.Text`
  color: ${colors.first_grey};
  font-size: ${fontSize.H3};
  font-weight: ${fontWeight.M};
  width: 280px;
`;

export const HighlightedText = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.H2};
  font-weight: ${fontWeight.SB};
`;
