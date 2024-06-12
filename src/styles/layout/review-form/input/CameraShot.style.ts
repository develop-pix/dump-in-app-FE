import styled from 'styled-components/native';

export const CameraShotSelectContainer = styled.View`
    width: 100%;
    gap: 10px;
`;

export const CameraShotSelectWrapper = styled.View`
    flex-direction: row;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
`;

export const CameraShotButton = styled.TouchableOpacity<{
    currentImage: string;
    selectedImage: string | null;
}>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: ${props => (props.currentImage === props.selectedImage ? '1px solid white' : '1px solid transparent')};
    flex: 1;
`;

export const CameraShotImage = styled.Image<{
    currentImage: string;
    selectedImage: string | null;
}>`
    width: 100%;
    border-radius: 6px;
    opacity: ${props =>
        props.selectedImage === null ? '1' : props.currentImage === props.selectedImage ? '1' : '0.2'};
`;

export const CameraShotTextContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    bottom: 5px;
`;
