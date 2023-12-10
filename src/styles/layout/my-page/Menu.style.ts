import styled from 'styled-components/native';
import {colors} from '../../base/Variable';

export const MenuContainer = styled.View`
  flex: 1;
  background-color: ${colors.black};
`;

export const MenuContentContainer = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

export const CloseModalButtonContainer = styled.View`
  align-self: flex-start;
  margin-top: 5px;
`;
