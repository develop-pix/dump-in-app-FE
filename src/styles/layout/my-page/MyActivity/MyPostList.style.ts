import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const MyPostListContainer = styled.View`
    width: ${Dimensions.get('window').width}px;
    align-items: center;
    flex: 1;
`;

//FIXME: 높이를 추후 수정해주어야함(MyPage FlatList Footer)
export const MyPostContainer = styled.View`
    flex: 1;
`;

export const MyPostFlatListContainer = styled.View`
    flex: 1;
`;

export const SkeletonMyPostContainer = styled.View``;
