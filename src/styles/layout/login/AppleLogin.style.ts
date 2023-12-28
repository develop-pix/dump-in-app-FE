import styled from 'styled-components/native';
import {colors, loginColors, fontSize, fontWeight} from '../../base/Variable';

export const AppleLoginContainer = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const AppleInfoContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 54px;
  background-color: ${loginColors.apple};
  border-radius: 12px;
  position: relative;
`;

export const AppleIconWrapper = styled.Text`
  position: absolute;
  left: 28%;
`;

export const AppleText = styled.Text`
  color: ${colors.black};
  font-size: ${fontSize.normal};
  font-weight: ${fontWeight.semibold};
  margin-left: 40px;
  color: rgba(0, 0, 0, 0.85);
`;
