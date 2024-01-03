import styled from 'styled-components/native';

import { colors } from '../../base/Variable';

export const HomeMunuBarContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background-color: ${colors.lightblack};
    height: 8%;
    padding: 15px;
`;

export const HomeMunuBarIconsBox = styled.View`
    flex-direction: row;
`;

export const HomeMunuBarIconContainer = styled.TouchableOpacity`
    margin-left: 10px;
`;
