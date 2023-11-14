import styled from 'styled-components/native';

interface ButtonContainerProps {
  backgroundColor: string;
  borderColor: string;
}

interface ButtonTextProps {
  textColor: string;
}

export const FilterButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  padding: 10px;
  border-radius: 10px;
  border-width: 1px;
  width: 180px;
  height: 50px;
  background-color: ${({backgroundColor}) => backgroundColor};
  border-color: ${({borderColor}) => borderColor};
`;

export const FilterButtonText = styled.Text<ButtonTextProps>`
  font-size: 16px;
  text-align: center;
  color: ${({textColor}) => textColor};
`;
