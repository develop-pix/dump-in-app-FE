import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const ReviewManageModalContainer = styled.View`
    background-color: ${colors.blackgrey};
    align-items: center;
    border: 1px solid ${colors.blackgrey};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-horizontal: 20px;
    padding-top: 28px;
    padding-bottom: 20px;
    width: 100%;
`;

export const ReviewManageModalWrapper = styled.View`
    width: 100%;
    gap: 16px;
`;

export const ReviewManageTouchableOpacity = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const HorizonLine = styled.View`
    border: 0.5px solid ${colors.lightgrey};
`;
