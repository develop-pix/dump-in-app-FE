import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const EventFrameContainer = styled.TouchableOpacity`
    width: 100%;
    aspect-ratio: 1;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 15px;
    background-color: ${colors.white};
`;

export const EventFrameImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: cover;
`;

export const TagImage = styled.View`
    position: absolute;
    left: 118px;
    width: 42px;
    height: 32px;
`;
