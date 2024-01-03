import styled from 'styled-components/native';

import { colors } from '../../../base/Variable';

export const HashtagSelectContainer = styled.View`
    width: 100%;
    flex-direction: column;
    gap: 10px;
`;

export const HashtagSelectWrapper = styled.View`
    flex-direction: row;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
`;

export const HashtagButton = styled.TouchableOpacity<{
    hashtagOption: string;
    isSelected: string[];
}>`
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding: 0px 14px;
    height: 36px;
    background-color: ${props => (props.isSelected.includes(props.hashtagOption) ? colors.white : colors.blackgrey)};
`;
