import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../base/Variable';

export const EventInfoContainer = styled.View`
  padding: 20px;
`;

export const InfoContainer = styled.View`
  padding: 20px;
  margin-top: 10px;
  background: ${colors.fourth_grey};
  border-radius: 10px;
`;

export const InfoTitle = styled.Text`
  color: ${colors.first_grey};
  font-size: ${fontSize.T2};
  font-weight: ${fontWeight.SB};
  margin-bottom: 10px;
`;

export const InfoDescription = styled.Text`
  color: ${colors.second_grey};
  font-size: ${fontSize.T2};
  font-weight: ${fontWeight.SB};
  margin-bottom: 20px;
`;

export const InfoDateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CalenderIcon = styled.Image`
  width: 16px;
  height: 21px;
  margin-right: 13px;
`;
