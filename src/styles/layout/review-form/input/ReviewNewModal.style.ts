import styled from 'styled-components/native';
import {colors} from '../../../base/Variable';

export const ReviewNewModalContainer = styled.View<{
  platform: 'web' | 'ios' | 'android' | 'windows' | 'macos';
}>`
  elevation: 0;
  background-color: ${colors.blackgrey};
  align-items: center;
  border: 1px solid ${colors.blackgrey};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 134px;
  position: absolute;
  bottom: ${props => (props.platform === 'ios' ? 805 : 830)}px;
`;

export const ReviewNewModalWrapper = styled.View`
  width: 90%;
  height: 100%;
  padding: 17px 0px;
  justify-content: space-around;
`;

export const ReviewNewTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const HorizonLine = styled.View`
  border: 0.5px solid ${colors.lightgrey};
`;
