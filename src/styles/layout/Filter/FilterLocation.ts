import styled from 'styled-components/native';
import {customColors} from '../../base/Variable';

export const LocationContainer = styled.View``;

export const LocationText = styled.Text`
  color: ${customColors.text_grey};
  font-size: 16px;
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
    isSelected ? 'white' : customColors.background_black};
`;

export const LocationButtonText = styled.Text<{isSelected: boolean}>`
  color: ${({isSelected}) =>
    isSelected ? 'black' : customColors.sub_text_grey};
`;
