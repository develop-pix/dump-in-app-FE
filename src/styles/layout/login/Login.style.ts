import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const LoginSafeContainer = styled.SafeAreaView`
    flex: 1;
    justify-content: space-between;
    background-color: ${colors.lightblack};
`;

export const LoginContainer = styled.View`
    flex: 1;
`;

export const LoginComponentsContainer = styled.View`
    align-items: center;
    flex: 1;
`;

export const LogoIconContainer = styled.View`
    margin-top: 80px;
    width: 140px;
    height: 140px;
    border-radius: 70px;
    margin-bottom: 20%;
`;
