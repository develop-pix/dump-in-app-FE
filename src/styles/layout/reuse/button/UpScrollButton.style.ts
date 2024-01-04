import styled from 'styled-components/native';

export const UpScrollImageBox = styled.TouchableOpacity<{top: string}>`
  width: 36px;
  height: 36px;
  position: absolute;
  right: 20px;
  top: ${({top}) => top};
  transform: translateY(-50px);
  z-index: 999;
  elevation: 999;
`;
