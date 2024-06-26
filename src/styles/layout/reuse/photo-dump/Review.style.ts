import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const ReviewContainer = styled.TouchableOpacity`
    border-radius: 10px;
    width: ${Dimensions.get('window').width * 0.8}px;
    aspect-ratio: 1;
    gap: 10px;
    align-items: center;
    background-color: ${colors.white};
`;

export const ReviewImage = styled.Image`
    border-radius: 10px;
    width: 100%;
    height: 100%;
`;

/* left: ReviewContainer width의 1/2 */
export const ReviewDescriptionContainer = styled.View`
    gap: 20px;
    width: 90%;
    position: absolute;
    bottom: 10px;
    left: ${Dimensions.get('window').width * 0.05}px;
`;

export const ReviewDescription = styled.View``;

export const ReviewHashtags = styled.View`
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
`;

export const ReviewFrameContainer = styled.View`
    flex-direction: row;
    gap: 3px;
`;

export const ReviewFrameColor = styled.View<{
    colorOption: string;
}>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background-color: ${props => props.colorOption};
`;

export const ReviewFrameGradient = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
`;
