import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const HomeHeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background-color: ${colors.lightblack};
    height: 8%;
    padding: 15px;
`;

export const RowContainer = styled.View`
    flex-direction: row;
`;

export const HomeHeaderIconContainer = styled.TouchableOpacity`
    width: 44px;
    height: 44px;
    justify-content: center;
    align-items: center;
`;
