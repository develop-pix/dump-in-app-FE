import styled from 'styled-components/native';
import {colors} from '../../base/Variable';
import {Dimensions} from 'react-native';

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
      ? Dimensions.get('window').height - 110
      : null}px;
`;
