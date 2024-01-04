import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const EventImageTitleContainer = styled.View`
    position: relative;
`;

export const EventImageContentContainer = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const EventImage = styled.ImageBackground`
    width: 100%;
    height: 400px;
    background-color: ${colors.whitegrey};
`;

export const ContentsContainer = styled.View`
    justify-content: flex-end;
    flex: 1;
    padding: 20px;
`;

export const TitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
