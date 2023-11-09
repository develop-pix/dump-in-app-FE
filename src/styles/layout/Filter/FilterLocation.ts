import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../base/Variable';

export const LocationContainer = styled.View``;

export const LocationText = styled.Text`
  color: ${colors.first_grey};
  font-size: ${fontSize.H5};
  font-weight: ${fontWeight.SB};
  margin-bottom: 10px;
`;

export const LocationBody = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const LocationButton = styled.TouchableOpacity<{isSelected: boolean}>`
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  background-color: ${({isSelected}) =>
    isSelected ? 'white' : colors.fourth_grey};
`;

export const LocationButtonText = styled.Text<{isSelected: boolean}>`
  color: ${({isSelected}) => (isSelected ? colors.black : colors.second_grey)};
`;
