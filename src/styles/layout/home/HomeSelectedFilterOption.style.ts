import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const FilterOptionContainer = styled.View`
    padding: 0px 20px 20px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`;

export const ColorBox = styled.View<{ backgroundColor: string }>`
    width: 30px;
    height: 30px;
    border-radius: 6px;
    background-color: ${props => props.backgroundColor};
`;

export const FilterOptionTextBox = styled.View`
    padding: 4px 10px;
    background-color: ${colors.blackgrey};
    border-radius: 6px;
`;
