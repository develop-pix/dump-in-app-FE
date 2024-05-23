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
    width: 100%;
    height: 100%;
    resize-mode: cover;
`;

export const ReviewInfo = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const ReviewNameContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const LocationIconContainer = styled.View`
    margin-right: 5px;
    margin-left: 5px;
`;
