import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const SeeMoreEventContainer = styled.View`
    width: ${Dimensions.get('window').width * 0.45}px;
    aspect-ratio: 1;
    border-radius: 10px;
    background-color: ${colors.grey};
    justify-content: center;
`;

export const SeeMoreEventTouchableOpacity = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const SeeMoreEventRecommendMessage = styled.View`
    align-items: center;
`;
export const SeeMoreEventMessage = styled.View`
    align-items: center;
    flex-direction: row;
`;
