import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const InputWrapper = styled.View<{
    platform: 'web' | 'ios' | 'android' | 'windows' | 'macos';
}>`
    flex-direction: row;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: ${props => (props.platform === 'ios' ? 70 : props.platform === 'android' ? 40 : null)}px;
`;

export const MapInputContainer = styled.View`
    width: 90%;
`;

export const MapInputWrapper = styled.TouchableOpacity<{
    platform: 'web' | 'ios' | 'android' | 'windows' | 'macos';
}>`
    flex-direction: row;
    align-items: center;
    height: 46px;
    background-color: ${colors.white};
    border-radius: 10px;
    border: ${props => (props.platform === 'android' ? `1px solid ${colors.whitegrey}` : 0)};
`;

export const InputForm = styled.View`
    height: 46px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const BlockInput = styled.TextInput`
    margin-left: 10px;
    color: ${colors.lightgrey};
`;
