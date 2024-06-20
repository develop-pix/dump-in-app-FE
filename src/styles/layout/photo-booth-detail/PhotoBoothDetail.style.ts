import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const PhotoBoothDetailContainer = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: ${colors.lightblack};
`;

export const PhotoBoothDetailScrollView = styled.ScrollView``;

export const PhotoBoothDetailWrapper = styled.View`
    gap: 40px;
`;

export const OfficialImagesContainer = styled.View`
    flex: 1;
    padding-bottom: 40px;
`;

export const PhotoDumpContainer = styled.View`
    flex: 1;
    padding-bottom: 120px;
`;
