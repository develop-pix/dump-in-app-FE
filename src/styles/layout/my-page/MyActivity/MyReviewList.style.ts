import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const MyReviewListContainer = styled.View`
    width: ${Dimensions.get('window').width}px;
    align-items: center;
    flex: 1;
`;

export const MyReviewContainer = styled.View`
    flex: 1;
    width: ${Dimensions.get('window').width}px;
`;

export const MyReviewFlatListContainer = styled.View`
    flex: 1;
`;

export const SkeletonMyReviewContainer = styled.View``;

export const MyReviewFrameContainer = styled.View`
    flex: 0.5;
`;
