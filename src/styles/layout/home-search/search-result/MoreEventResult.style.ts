import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../../base/Variable';

export const ModalContainer = styled.View`
  flex: 1;
  background-color: ${colors.black};
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

export const EventCount = styled.Text`
  color: ${colors.first_grey};
  font-size: ${fontSize.B4};
  font-weight: ${fontWeight.SB};
`;
