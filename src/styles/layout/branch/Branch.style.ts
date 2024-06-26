import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

/* page */
export const BranchContainer = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: ${colors.lightblack};
`;

export const BranchScrollView = styled.ScrollView.attrs({
    contentContainerStyle: { paddingBottom: 100 },
})``;

/* Branch */
export const BranchForm = styled.View`
    gap: 30px;
`;
