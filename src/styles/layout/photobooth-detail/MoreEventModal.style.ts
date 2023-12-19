import styled from 'styled-components/native';
import {colors} from '../../base/Variable';

export const MoreEventModalContainer = styled.View`
  height: 80%;
  background-color: ${colors.darkgrey};
  padding: 20px;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const CloseButtonContainer = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;
