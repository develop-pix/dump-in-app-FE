import styled from 'styled-components/native';

import { colors } from '../../base/Variable';

export const BranchDescriptionContainer = styled.View`
    width: 90%;
    gap: 10px;
`;

export const BranchDesc = styled.View`
    width: 100%;
    background-color: ${colors.blackgrey};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    gap: 6px;
    padding: 18px 10px;
`;

export const DescContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 90%;
`;
