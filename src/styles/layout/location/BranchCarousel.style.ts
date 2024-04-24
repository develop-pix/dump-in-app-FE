import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const BranchCardContainer = styled.View`
    position: absolute;
    bottom: -160px;
    width: 100%;
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

export const NoBranchContainer = styled.View``;

export const NoBranchToastContainer = styled.View`
    position: absolute;
    left: ${Dimensions.get('window').width / 2 - 120}px;
    bottom: 16px;
    width: 240px;
    height: 36px;
    background-color: ${colors.black};
    opacity: 0.6;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
`;
