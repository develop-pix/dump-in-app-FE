import styled from 'styled-components/native';
import {loginColors} from '../../base/Variable';

export const NaverLoginContainer = styled.View`
  align-items: center;
  margin-top: 10px;
`;

// 네이버 규정 색상 #03C75A
export const NaverIconWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 54px;
  background-color: ${loginColors.naver};
  border-radius: 12px;
`;

export const NaverIcon = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;
