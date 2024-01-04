import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const ToolsSelectContainer = styled.View`
    width: 47%;
    flex-direction: column;
    gap: 10px;
`;

export const ToolsInputContainer = styled.View`
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const ToolsButtonLeft = styled.TouchableOpacity<{
    toolsOption: boolean | null;
}>`
    padding: 0px 20px;
    height: 36px;
    background-color: ${colors.blackgrey};
    justify-content: center;
    align-items: center;
    border-radius: 6px 0px 0px 6px;
    background-color: ${props => (props.toolsOption === true ? colors.white : colors.blackgrey)};
`;
export const ToolsButtonRight = styled.TouchableOpacity<{
    toolsOption: boolean | null;
}>`
    padding: 0px 20px;
    height: 36px;
    background-color: ${colors.blackgrey};
    justify-content: center;
    align-items: center;
    border-radius: 0px 6px 6px 0px;
    background-color: ${props => (props.toolsOption === false ? colors.white : colors.blackgrey)};
`;
