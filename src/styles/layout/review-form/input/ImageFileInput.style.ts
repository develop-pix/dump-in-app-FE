import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const ImageFileInputContainer = styled.View`
    width: 100%;
`;

export const EnlargedImageContainer = styled.View`
    aspect-ratio: 1;
    background-color: ${colors.darkgrey};
    align-items: center;
`;

export const NoDataImageContainer = styled.TouchableOpacity`
    height: 100%;
    aspect-ratio: 0.7;
`;

export const EnlargedPreviewImageContainer = styled.View`
    height: 100%;
    aspect-ratio: 0.7;
`;

export const TrashButtonContainer = styled.View`
    position: absolute;
    top: 10px;
    left: 10px;
`;

export const TrashButton = styled.TouchableOpacity``;

export const PreviewNoImage = styled.View`
    height: 100%;
    width: 100%;
    background-color: ${colors.blackgrey};
    align-items: center;
    justify-content: center;
`;

export const EnlargedPreviewImage = styled.Image`
    height: 100%;
    width: 100%;
    background-color: ${colors.blackgrey};
    object-fit: cover;
`;

export const EnlargedRepresentativeTitleContainer = styled.View`
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: ${colors.blackgrey};
    border-radius: 5px;
    width: 38px;
    height: 20px;
    align-items: center;
    justify-content: center;
`;

export const ReviewErrorContainerFileInput = styled.View`
    position: absolute;
    bottom: 55px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3px;
`;

export const ImageUploadButtonContainer = styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const ImageUploadButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 0px 13px;
    height: 30px;
    background-color: ${colors.black};
    opacity: 0.6;
    border-radius: 8px;
`;

export const ImagesContainer = styled.View`
    align-items: center;
`;

export const PreviewImagesContainer = styled.View`
    width: 90%;
    flex-direction: row;
    gap: 15px;
    flex-wrap: nowrap;
    margin-bottom: 20px;
`;

export const PreviewImageWrapper = styled.View`
    position: relative;
    justify-content: center;
    align-items: center;
`;

export const SelectedPreviewImageWrapper = styled.View`
    position: relative;
    justify-content: center;
    align-items: center;
    border: 2px solid ${colors.yellow};
`;

export const PreviewImageButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const PreviewRepresentativeImage = styled.Image`
    width: 48px;
    height: 72px;
    justify-content: center;
    align-items: center;
`;

export const PreviewImage = styled.Image`
    width: 48px;
    height: 72px;
    justify-content: center;
    align-items: center;
`;

export const RepresentativeTitleContainer = styled.View`
    background-color: ${colors.blackgrey};
    border-radius: 5px;
    width: 38px;
    height: 20px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 35%;
`;

export const AddImageContainer = styled.TouchableOpacity`
    background-color: ${colors.darkgrey};
    width: 48px;
    height: 72px;
    align-items: center;
    justify-content: center;
`;
