import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const NavigationBarContainer = styled.View`
    flex-direction: row;
    background-color: ${colors.black};
    align-items: center;
    height: 56px;
`;

export const ReviewNewItem = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;
