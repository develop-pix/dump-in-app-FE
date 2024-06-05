import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

/* PhotoDump */

export const PhotoDumpContainer = styled.View`
    width: 100%;
    gap: 10px;
    align-items: center;
    margin-top: 30px;
`;

export const SubTitleContainer = styled.View`
    width: 90%;
`;

export const OfficialImagesContainer = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    gap: 11px;
    flex-wrap: wrap;
`;
export const CarouselContainer = styled.View`
    width: 100%;
`;

export const ReviewWrapper = styled.View`
    flex-direction: row;
    justify-content: center;
`;

export const Reviews = styled.View`
    width: ${Dimensions.get('window').width * 0.8}px;
    align-items: center;
    margin-left: ${Dimensions.get('window').width * 0.02}px;
    margin-right: ${Dimensions.get('window').width * 0.02}px;
`;

export const CarouselScrollView = styled.ScrollView``;

export const FindMoreReviewContainer = styled.View`
    border-radius: 10px;
    width: ${Dimensions.get('window').width * 0.8}px;
    aspect-ratio: 1;
    gap: 10px;
    align-items: center;
    background-color: ${colors.lightgrey};
`;

export const ReviewBlurImage = styled.Image`
    width: 100%;
    height: 100%;
    opacity: 0.6;
`;

export const FindMoreReviewWrapper = styled.View`
    width: 100%;
    height: 100%;
    top: 50px;
    position: absolute;
    align-items: center;
    gap: 50px;
`;

export const FindMoreReviewTextContainer = styled.View`
    align-items: center;
    gap: 20px;
`;

export const FindMoreReviewTextWrapper = styled.View`
    justify-content: center;
    align-items: center;
`;

export const SeeMoreButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;
