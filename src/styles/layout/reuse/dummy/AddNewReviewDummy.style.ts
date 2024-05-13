import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const AddNewReviewContainer = styled.View`
    width: 100%;
    aspect-ratio: 0.75;
    border-radius: 20px;
    margin-bottom: 15px;
    background-color: ${colors.grey};
    justify-content: center;
`;

export const AddNewReviewTouchableOpacity = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const AddNewReviewMessage = styled.View`
    align-items: center;
`;
