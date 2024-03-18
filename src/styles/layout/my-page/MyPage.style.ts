import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const MyPageSafeContainer = styled.SafeAreaView`
    flex: 1;
    justify-content: space-between;
    background-color: ${colors.lightblack};
`;

export const MyPageContainer = styled.SafeAreaView`
    flex: 1;
`;
