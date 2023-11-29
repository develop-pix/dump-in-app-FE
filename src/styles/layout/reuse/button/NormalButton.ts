import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../../base/Variable';

export const NormalButtonContainer = styled.TouchableOpacity`
  width: 335px;
  height: 44px;
  padding: 10px;
  background-color: ${colors.black};
  border: 1px solid white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const NormalButtonText = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.BTN};
  font-weight: ${fontWeight.SB};
`;
