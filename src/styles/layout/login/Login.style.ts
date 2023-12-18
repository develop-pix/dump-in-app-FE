import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../base/Variable';

export const LoginContainer = styled.View`
  flex: 1;
`;

export const LoginComponentsContainer = styled.View`
  align-items: center;
  flex: 1;
`;

export const LogoIcon = styled.Image`
  margin-top: 100px;
  width: 140px;
  height: 140px;
  border-radius: 70px;
`;

export const AppDescriptionWrapper = styled.View`
  margin-top: 30px;
  width: 50%;
`;

export const AppDescriptionText = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.bigger};
  font-weight: ${fontWeight.thick};
  text-align: center;
`;
