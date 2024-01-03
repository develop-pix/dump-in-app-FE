import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../base/Variable';

export const ReviewDetailContainer = styled.SafeAreaView`
    flex: 1;
    justify-content: space-between;
    background-color: ${colors.lightblack};
`;

export const TitleContainer = styled.View`
    width: 100%;
`;
export const ReviewDetailFormContainer = styled.SafeAreaView`
    width: 100%;
    align-items: center;
`;

export const ReviewDetailFormWrapper = styled.View`
    width: 100%;
`;

export const ReviewDetailCarousel = styled.ScrollView`
    background-color: ${colors.white};
`;

export const ReviewImageContainer = styled.View`
    object-fit: scale-down;
    width: ${Dimensions.get('screen').width}px;
    height: ${Dimensions.get('window').height - 24}px;
`;
export const ReviewImage = styled.Image`
    object-fit: scale-down;
    width: 100%;
    height: ${Dimensions.get('window').height - 88}px;
`;

/* left: ReviewContainer width의 1/2 */
export const ReviewDescriptionContainer = styled.View<{
    platform: 'web' | 'ios' | 'android' | 'windows' | 'macos';
}>`
    display: flex;
    gap: 10px;
    width: 90%;
    position: absolute;
    bottom: ${props => (props.platform === 'ios' ? '170px' : props.platform === 'android' ? '140px' : null)};
    left: ${Dimensions.get('window').width * 0.05}px;
`;

export const ReviewDescTop = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ReviewDescMiddle = styled.View`
    gap: 10px;
`;

export const ReviewDescriptionTouchableContainer = styled.TouchableOpacity``;

export const ReviewDescBottom = styled.View`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const ReviewDetailForm = styled.View`
    width: 100%;
    height: ${Dimensions.get('window').height}px;
`;

export const ButtonContainer = styled.View`
    position: absolute;
    top: 300px;
    width: 100%;
`;

export const PrevButtonContainer = styled.TouchableOpacity`
    position: absolute;
    left: 0;
`;
export const NextButtonContainer = styled.TouchableOpacity`
    position: absolute;
    right: 0;
`;
