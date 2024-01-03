import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../../base/Variable';

export const EventFrameContainer = styled.TouchableOpacity`
    width: ${Dimensions.get('window').width * 0.45}px;
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
