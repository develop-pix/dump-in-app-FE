import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const TouchableCardContainer = styled.TouchableOpacity`
    border-radius: 20px;
    width: 100%;
    height: 160px;
    background-color: ${colors.grey};
    padding: 20px 0px 20px 0px;
    align-items: center;
    shadow-color: ${colors.black};
    shadow-offset: 0px 4px;
    shadow-opacity: 0.2;
    shadow-radius: 12px;
    elevation: 4;
`;

export const CardContainer = styled.View`
    width: 90%;
    height: 100%;
    justify-content: space-between;
`;

export const BranchCardTop = styled.View`
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
    gap: 10px;
    width: 70%;
`;

export const BranchCardBranchNameWrapper = styled.View`
    flex-direction: row;
    gap: 7px;
    align-items: center;
`;

export const BranchCardHashtag = styled.View`
    flex-direction: row;
    gap: 5px;
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

export const BranchCardAppScheme = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    flex-direction: row;
    align-items: center;
`;
