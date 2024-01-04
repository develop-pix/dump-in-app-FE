import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const RecommendSearchContainer = styled.View`
    padding: 24px 20px 0px 20px;
    margin-top: 15px;
`;

export const RecommendSearchContentContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 8px;
    width: 335px;
    margin-top: 15px;
`;

export const RecommendSearchButton = styled.TouchableOpacity`
    height: 36px;
    padding: 4px 14px 4px 14px;
    border-radius: 8px;
    background-color: ${colors.blackgrey};
    justify-content: center;
    flex-direction: row;
    align-items: center;
`;
