import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const LocationInputContainer = styled.View`
    width: 47%;
    gap: 10px;
`;

export const LocationInputButton = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    background-color: ${colors.blackgrey};
    justify-content: center;
    padding-left: 10px;
`;

export const LocationTextContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 7px;
`;
