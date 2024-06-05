import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const PhotoBoothFrameContainer = styled.TouchableOpacity`
    width: 100%;
    aspect-ratio: 1;
    border-radius: 14px;
    overflow: hidden;
    margin-bottom: 12px;
    background-color: ${colors.white};
`;

export const PhotoBoothFrameImage = styled.Image`
    flex: 1;
    resize-mode: cover;
`;

export const TagImage = styled.View`
    position: absolute;
    left: 118px;
    width: 42px;
    height: 32px;
`;

export const PhotoBoothInfo = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
`;

export const PhotoBoothNameContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    margin-horizontal: 5px;
    gap: 4px;
`;

export const PhotoBoothNameTextContainer = styled.View`
    flex: 1;
`;
