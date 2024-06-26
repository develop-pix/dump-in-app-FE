import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const MyPhotoBoothFrameContainer = styled.TouchableOpacity`
    flex-direction: row;
    width: 100%;
    height: 120px;
    background-color: ${colors.blackgrey};
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 20px;
`;

export const PhotoBoothImage = styled.Image`
    width: 44px;
    height: 44px;
`;

export const InfoContainer = styled.View`
    flex: 1;
    margin-left: 20px;
`;

export const PhotoBoothNameWrapper = styled.View`
    flex-direction: row;
    gap: 10px;
`;

export const HashtagContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    margin-top: 10px;
`;

export const FavoriteIcon = styled.View`
    position: absolute;
    top: 10px;
    right: 10px;
`;
