import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../../base/Variable';

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
  padding-left: 10px;
`;

export const DateTextInput = styled.TextInput`
  width: 100%;
  background-color: ${colors.blackgrey};
  border-radius: 10px;
  color: ${colors.white};
  font-size: ${fontSize.smaller};
  font-weight: ${fontWeight.thin};
  line-height: 14px;
`;
