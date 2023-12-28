import styled from 'styled-components/native';
import {colors} from '../../base/Variable';

export const ReviewManageModalContainer = styled.View<{
  platform: 'web' | 'ios' | 'android' | 'windows' | 'macos';
}>`
  elevation: 0;
  background-color: ${colors.blackgrey};
  align-items: center;
  border: 1px solid ${colors.blackgrey};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  position: absolute;
  height: 134px;
  bottom: ${props =>
    props.platform === 'ios'
      ? '130px'
      : props.platform === 'android'
      ? '30px'
      : null};
`;

export const ReviewManageModalWrapper = styled.View`
  width: 90%;
  height: 100%;
  padding: 17px 0px;
  justify-content: space-around;
`;

export const ReviewManageTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const HorizonLine = styled.View`
  border: 0.5px solid ${colors.lightgrey};
`;
