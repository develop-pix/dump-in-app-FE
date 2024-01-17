import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const BranchCardContainer = styled.View`
    position: absolute;
    bottom: -170px;
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

export const NoBranchContainer = styled.View``;

export const NoBranchToastContainer = styled.View`
    position: absolute;
    left: 80px;
    bottom: 25px;
    width: 242px;
    height: 37px;
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: ${colors.black};
    opacity: 0.6;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
`;
