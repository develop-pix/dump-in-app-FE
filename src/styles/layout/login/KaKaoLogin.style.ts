import styled from 'styled-components/native';
import {fontSize, fontWeight, loginColors} from '../../base/Variable';

export const KaKaoLoginContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`;

export const KakaoInfoContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 54px;
  background-color: ${loginColors.kakao};
  border-radius: 12px;
  position: relative;
`;

export const KakaoIconWrapper = styled.View`
  position: absolute;
  left: 30%;
`;

export const KaKaoText = styled.Text`
  font-size: ${fontSize.normal};
  font-weight: ${fontWeight.semibold};
  color: rgba(0, 0, 0, 0.85);
  margin-left: 40px;
`;
