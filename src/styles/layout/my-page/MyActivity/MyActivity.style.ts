import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemContainer = styled.TouchableOpacity`
  align-items: center;
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Text = styled.Text<{isActive: boolean}>`
  margin-top: 5px;
  color: ${({isActive}) => (isActive ? 'white' : 'gray')};
  border-bottom-width: ${({isActive}) => (isActive ? '2px' : '0px')};
  border-color: white;
`;
