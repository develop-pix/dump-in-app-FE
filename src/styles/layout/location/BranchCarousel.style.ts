import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const BranchCardContainer = styled.View`
    position: absolute;
    bottom: 50px;
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const CarouselContainer = styled.ScrollView`
    width: 100%;
`;

export const Card = styled.View`
    width: ${Dimensions.get('window').width * 0.9}px;
    align-items: center;
    margin-left: ${Dimensions.get('window').width * 0.01}px;
    margin-right: ${Dimensions.get('window').width * 0.01}px;
`;
