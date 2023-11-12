import styled from 'styled-components/native';
import {colors} from '../../base/Variable';
import {TouchableOpacity} from 'react-native';

/* page */
export const LocationContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.white};
`;

/* Map */

export const MapContainer = styled.SafeAreaView`
  flex: 1;
  display: flex;
`;

/* MapInput */

export const InputWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
export const InputForm = styled.View`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export const MapInputhWrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 46px;
  background-color: ${colors.white};
  border: 1px solid;
  border-radius: 10px;
`;

export const BlockInput = styled.TextInput`
  width: 100%;
  margin-left: 10px;
  color: ${colors.second_grey};
`;
