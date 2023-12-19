import styled from 'styled-components/native';
import {colors} from '../../base/Variable';

export const EventInfoContainer = styled.View`
  padding: 20px;
`;

export const InfoContainer = styled.View`
  padding: 20px;
  margin-top: 10px;
  background: ${colors.blackgrey};
  border-radius: 10px;
`;

export const InfoTitleContainer = styled.View`
  margin-bottom: 10px;
`;

export const InfoDescriptionContainer = styled.View`
  margin-bottom: 20px;
`;

export const InfoDateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CalenderIconContainer = styled.View`
  margin-right: 13px;
`;
