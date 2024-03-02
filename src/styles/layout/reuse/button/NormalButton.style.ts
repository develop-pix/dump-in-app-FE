import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const NormalButtonContainer = styled.TouchableOpacity`
    width: 335px;
    height: 44px;
    padding: 10px;
    background-color: ${colors.black};
    border: 1px solid white;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const FlatListButtonContainer = styled.View`
    width: 100%;
    align-items: center;
`;
