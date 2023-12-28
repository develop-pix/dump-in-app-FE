import styled from 'styled-components/native';

export const CategoryEventContainer = styled.View`
  flex: 1;
  padding: 20px;
  padding-bottom: 100px;
`;

export const CategoryEventUpScrollImageBox = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  position: absolute;
  right: 20px;
  top: 100%;
  transform: translateY(-50px);
  z-index: 999;
  elevation: 999;
`;
