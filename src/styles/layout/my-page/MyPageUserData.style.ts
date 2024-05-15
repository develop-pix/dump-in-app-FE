import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const ActivityContainer = styled.View`
    width: ${Dimensions.get('window').width}px;
    background-color: ${colors.blackgrey};
`;
