import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

/** page */
export const LocationContainer = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: ${colors.white};
`;

/** Map TODO: ios height 체크 */
export const MapContainer = styled.View<{
    platform: 'web' | 'ios' | 'android' | 'windows' | 'macos';
}>`
    display: flex;
    height: ${props =>
        props.platform === 'ios'
            ? Dimensions.get('window').height - 56
            : props.platform === 'android'
              ? Dimensions.get('window').height - 56
              : null}px;
`;
