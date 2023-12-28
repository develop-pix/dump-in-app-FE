import styled from 'styled-components/native';
import {colors} from '../../../base/Variable';

export const DateInputContainer = styled.View`
  width: 47%;
  flex-direction: column;
  gap: 10px;
`;

export const DateInputWrapper = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: ${colors.blackgrey};
  justify-content: center;
`;

export const DateTextButton = styled.TouchableOpacity<{
  onSelected: Date | null;
}>`
  width: 100%;
  background-color: ${colors.blackgrey};
  border-radius: 10px;
  flex-direction: row;
  padding-left: ${props => (props.onSelected === null ? '10' : '0')}px;
  justify-content: ${props =>
    props.onSelected === null ? 'flex-start' : 'center'};
`;
