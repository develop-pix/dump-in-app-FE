import styled from 'styled-components/native';

export const CameraShotSelectContainer = styled.View`
  width: 100%;
  flex-direction: column;
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
  SelectedImage: string | null;
}>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: ${props =>
    props.currentImage === props.SelectedImage ? '1px solid white' : '0px'};
  border-radius: 6px;
`;

export const CameraShotImage = styled.Image<{
  currentImage: string;
  SelectedImage: string | null;
}>`
  width: 77px;
  height: 102px;
  opacity: ${props =>
    props.SelectedImage === null
      ? '1'
      : props.currentImage === props.SelectedImage
      ? '1'
      : '0.2'};
`;

export const CameraShotTextContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 5px;
`;
