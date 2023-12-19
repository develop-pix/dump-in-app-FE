import styled from 'styled-components/native';
import {colors} from '../../base/Variable';

export const NavigationBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.lightblack};
  padding: 5px 20px;
  width: 100%;
  position: absolute;
  bottom: 0;
  align-items: center;
  elevation: 1;
`;

export const ReviewNewItem = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50px;
  elevation: 1;
  z-index: 1;
`;
