import styled from 'styled-components/native';

export const NaverLoginContainer = styled.View`
  align-items: center;
  margin-top: 10px;
`;

// 네이버 규정 색상 #03C75A
export const NaverIconWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 360px;
  height: 54px;
  background-color: #03c75a;
  border-radius: 10px;
  padding: 0 16px;
`;

export const NaverIcon = styled.Image`
  width: 24px;
  height: 24px;
  resize-mode: contain;
`;
