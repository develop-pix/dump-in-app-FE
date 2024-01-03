import styled from 'styled-components/native';

import { colors } from '../../../base/Variable';

export const PartySelectContainer = styled.View`
    width: 100%;
    flex-direction: column;
    gap: 10px;
`;

export const PartySelectWrapper = styled.View`
    flex-direction: row;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
`;

export const PartyButton = styled.TouchableOpacity<{
    partyOption: number;
    isSelected: number | null;
}>`
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color: ${props =>
        props.isSelected === null
            ? colors.blackgrey
            : props.partyOption === props.isSelected
              ? colors.white
              : colors.blackgrey};
`;
