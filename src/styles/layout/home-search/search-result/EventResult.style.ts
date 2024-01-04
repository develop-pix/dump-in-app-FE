import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const EventResultContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 0px 20px;
    border-bottom-width: 1px;
    border-color: ${colors.darkgrey};
`;

export const EventListInfo = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 0px;
    width: 300px;
`;

export const EventListIconContainer = styled.View`
    margin-top: 4px;
    margin-right: 10px;
`;
