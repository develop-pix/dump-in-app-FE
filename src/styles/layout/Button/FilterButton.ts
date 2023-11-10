import styled from 'styled-components/native';
import {fontSize, fontWeight} from '../../base/Variable';

export const FilterButtonContainer = styled.TouchableOpacity<{
  backgroundColor: string;
  borderColor: string;
}>`
  border-radius: 10px;
  border-width: 1px;
  width: 162px;
  height: 43px;
  justify-content: center;
  align-items: center;
  background-color: ${({backgroundColor}) => backgroundColor};
  border-color: ${({borderColor}) => borderColor};
`;

export const FilterButtonText = styled.Text<{
  textColor: string;
}>`
  font-size: ${fontSize.BTN};
  font-weight: ${fontWeight.SB};
  text-align: center;
  color: ${({textColor}) => textColor};
`;
