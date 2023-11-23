import styled from 'styled-components/native';
import {colors} from '../../base/Variable';

export const NavigationBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.black};
  padding: 15px;
  width: 100%;
  position: absolute;
  bottom: 0;
  align-items: center;
  elevation: 1;
`;

export const CameraImageBox = styled.Pressable`
  padding: 5px;
`;
