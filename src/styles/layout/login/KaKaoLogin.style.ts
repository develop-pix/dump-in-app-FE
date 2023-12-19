import styled from 'styled-components/native';
import {fontSize, fontWeight} from '../../base/Variable';

export const KaKaoLoginContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`;

// 카카오 규정 색상 #FEE500, border 12px
export const KaKaoIconWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 54px;
  background-color: #fee500;
  border-radius: 12px;
`;

export const KaKaoIcon = styled.Image`
  width: 24px;
  height: 24px;
  resize-mode: contain;
  margin-right: 15px;
  margin-top: 5px;
`;

export const KaKaoText = styled.Text`
  font-size: ${fontSize.normal};
  font-weight: ${fontWeight.semibold};
  color: rgba(0, 0, 0, 0.85);
`;
