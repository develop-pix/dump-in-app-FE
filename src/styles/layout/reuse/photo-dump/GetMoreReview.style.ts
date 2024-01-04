import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const GetMoreReviewContainer = styled.View`
    width: ${Dimensions.get('window').width * 0.8}px;
    height: ${Dimensions.get('window').width * 0.8}px;
    border-radius: 10px;
    background-color: ${colors.lightgrey};
    justify-content: center;
`;
