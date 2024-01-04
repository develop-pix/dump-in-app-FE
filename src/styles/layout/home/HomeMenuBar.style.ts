import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const HomeMenuBarContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background-color: ${colors.lightblack};
    height: 8%;
    padding: 15px;
`;

export const HomeMenuBarIconsBox = styled.View`
    flex-direction: row;
`;

export const HomeMenuBarIconContainer = styled.TouchableOpacity`
    margin-left: 10px;
`;
