import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const ReviewFrameContainer = styled.TouchableOpacity`
    width: 100%;
    aspect-ratio: 0.75;
    border-radius: 14px;
    overflow: hidden;
    margin-bottom: 12px;
    background-color: ${colors.white};
`;

export const ReviewFrameImage = styled.Image`
    flex: 1;
    resize-mode: cover;
`;

export const ReviewInfo = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
`;

export const ReviewNameContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    margin-horizontal: 5px;
    gap: 4px;
`;

export const ReviewNameTextContainer = styled.View`
    flex: 1;
`;
