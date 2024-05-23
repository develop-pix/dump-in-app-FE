import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const SeeNearPhotoBoothContainer = styled.View`
    width: 100%;
    aspect-ratio: 1;
    border-radius: 14px;
    margin-bottom: 12px;
    background-color: ${colors.grey};
    justify-content: center;
`;

export const SeeNearPhotoBoothTouchableOpacity = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const SeeNearPhotoBoothRecommendMessage = styled.View`
    align-items: center;
`;
export const SeeNearPhotoBoothMessage = styled.View`
    align-items: center;
    flex-direction: row;
`;
