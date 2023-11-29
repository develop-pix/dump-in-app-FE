import styled from 'styled-components/native';
import {colors} from '../../base/Variable';
import {Dimensions, TouchableOpacity} from 'react-native';

/* page */
export const LocationContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.white};
`;

/* Map */

export const MapContainer = styled.View<{
  platform: 'web' | 'ios' | 'android' | 'windows' | 'macos';
}>`
  display: flex;
  height: ${props =>
    props.platform === 'ios'
      ? Dimensions.get('window').height - 90
      : props.platform === 'android'
      ? Dimensions.get('window').height - 120
      : null}px;
`;

/* MapInput */

//인풋 위치 수정하기
export const InputWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 80px;
`;
export const MapInputContainer = styled.View`
  width: 90%;
`;

export const MapInputhWrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 46px;
  background-color: ${colors.white};
`;

export const InputForm = styled.View`
  display: flex;
  height: 46px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid;
  border-radius: 10px;
`;

export const BlockInput = styled.TextInput`
  margin-left: 10px;
  color: ${colors.second_grey};
`;
