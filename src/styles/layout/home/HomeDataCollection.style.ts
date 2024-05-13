import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { CollectionDataProps } from 'interfaces/Home.interface';

export const CollectionContainer = styled.View`
    flex: 1;
`;

export const CollectionFlatList = styled(FlatList<CollectionDataProps>)`
    padding-top: 4px;
`;
