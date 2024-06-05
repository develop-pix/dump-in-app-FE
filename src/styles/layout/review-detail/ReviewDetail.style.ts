import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const ReviewDetailContainer = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: ${colors.lightblack};
`;

export const TitleContainer = styled.View`
    width: 100%;
`;
export const ReviewDetailFormContainer = styled.View`
    flex: 1;
`;

export const ReviewDetailFormWrapper = styled.View`
    flex: 1;
`;

export const ReviewDetailCarousel = styled.ScrollView`
    background-color: ${colors.lightblack};
`;

export const DotContainer = styled.View`
    position: absolute;
    flex-direction: row;
    align-self: center;
    top: 16px;
    gap: 5px;
`;

export const DotActive = styled.View``;

export const FillDot = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 5px;
    background-color: ${colors.white};
    border-color: ${colors.white};
    border-width: 1px;
`;

export const EmptyDot = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 5px;
    background-color: ${colors.whitegrey};
    border-color: ${colors.whitegrey};
    border-width: 1px;
`;

/** left: ReviewContainer width의 1/2 */
export const ReviewDescriptionContainer = styled.View`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
`;

export const ReviewDescTop = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 44px;
`;

export const ReviewDescMiddle = styled.View``;

export const ReviewDescriptionTouchableContainer = styled.TouchableOpacity``;

export const ReviewDescBottom = styled.View`
    flex-direction: row;
    gap: 8px;
    padding: 12px 20px;
    background-color: ${colors.black};
`;

export const ReviewDetailForm = styled.View`
    flex: 1;
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

export const ReviewFrameContainer = styled.View`
    flex-direction: row;
    gap: 3px;
`;

export const ReviewFrameColor = styled.View<{
    colorOption: string;
}>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background-color: ${props => props.colorOption};
`;

export const ReviewFrameGradient = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
`;
