import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const ReviewModalContainer = styled.View`
    background-color: ${colors.blackgrey};
    border: 1px solid ${colors.blackgrey};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
`;

export const ReviewModalWrapper = styled.View`
    width: 100%;
    padding-vertical: 20px;
`;

export const ReviewTouchableOpacity = styled.TouchableOpacity`
    height: 52px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
`;

export const HorizonLine = styled.View`
    border: 0.5px solid ${colors.lightgrey};
`;
