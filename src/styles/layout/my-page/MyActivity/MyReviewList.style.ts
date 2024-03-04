import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const MyReviewListContainer = styled.View`
    width: ${Dimensions.get('window').width}px;
    align-items: center;
`;

//FIXME: 높이를 추후 수정해주어야함(MyPage FlatList Footer)
export const MyReviewContainer = styled.View`
    width: 95%;
    height: 450px;
`;

export const MyReviewFlatListContainer = styled.View``;

export const SkeletonMyReviewContainer = styled.View``;
