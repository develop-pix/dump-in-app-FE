import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const MyPostListContainer = styled.View`
    width: ${Dimensions.get('window').width}px;
    align-items: center;
    flex: 1;
`;

export const MyPostContainer = styled.View`
    flex: 1;
    width: ${Dimensions.get('window').width}px;
`;

export const MyPostFlatListContainer = styled.View`
    flex: 1;
`;

export const SkeletonMyPostContainer = styled.View`
    flex: 1;
    padding-vertical: 16px;
`;

export const MyPostFrameContainer = styled.View`
    flex: 0.5;
`;
