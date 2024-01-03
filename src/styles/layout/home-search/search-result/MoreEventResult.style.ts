import styled from 'styled-components/native';

import { colors } from '../../../base/Variable';

export const ModalContainer = styled.View`
    flex: 1;
    background-color: ${colors.lightblack};
`;

export const EventTitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 10px;
`;
