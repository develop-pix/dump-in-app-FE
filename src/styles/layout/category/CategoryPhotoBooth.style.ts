import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const CategoryPhotoBoothContainer = styled.View`
    width: 100%;
    align-items: center;
    flex: 1;
`;

export const CategoryPhotoBoothScrollView = styled.ScrollView`
    width: 95%;
`;

export const PhotoBoothListContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 100px;
`;

export const PhotoBoothItem = styled.TouchableOpacity`
    width: 48%;
    height: 113px;
    background-color: ${colors.blackgrey};
    margin-bottom: 10px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const PhotoBoothLogo = styled.Image`
    width: 44px;
    height: 44px;
    margin-bottom: 10px;
`;
