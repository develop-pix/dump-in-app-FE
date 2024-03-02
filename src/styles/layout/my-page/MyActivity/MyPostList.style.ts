import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const MyPostListContainer = styled.View`
    width: ${Dimensions.get('window').width}px;
    align-items: center;
`;

//FIXME: 높이를 추후 수정해주어야함(MyPage FlatList Footer)
export const MyPostContainer = styled.View`
    width: 95%;
    height: 450px;
`;

export const MyPostFlatListContainer = styled.View``;

export const SkeletonMyPostContainer = styled.View``;
