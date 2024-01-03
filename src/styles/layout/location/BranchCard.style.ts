import styled from 'styled-components/native';

import { colors } from '../../base/Variable';

export const TouchableCardContainer = styled.TouchableOpacity`
    border-radius: 10px;
    width: 100%;
    height: 160px;
    background-color: ${colors.grey};
    padding: 20px 0px 20px 0px;
    align-items: center;
`;

export const CardContainer = styled.View`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

export const BranchCardTop = styled.View`
    display: flex;
    padding-bottom: 10px;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

export const BranchCardLogo = styled.Image`
    width: 44px;
    height: 44px;
`;

export const BranchCardDescription = styled.View`
    diplay: flex;
    width: 70%;
`;

export const BranchCardBranchNameWrapper = styled.View`
    display: flex;
    flex-direction: row;
    gap: 3px;
    align-items: center;
`;

export const BranchCardHashtag = styled.View`
    flex-direction: row;
    gap: 3px;
    flex-wrap: wrap;
    overflow: hidden;
`;

export const BranchCardHorizonLine = styled.View`
    border: 1px solid ${colors.blackgrey};
`;

export const BranchCardBottom = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
