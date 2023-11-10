import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../../base/Variable';

// 카메라샷 이미지 컨테이너 스타일
export const CameraShotImageContainer = styled.TouchableOpacity<{
  isSelected: boolean;
}>`
  margin: 5px;
  align-items: center;
  position: relative;

  border-width: 1px;
  border-radius: 6px;
  border-color: ${({isSelected}) =>
    isSelected ? colors.white : 'transparent'};
`;

export const CameraShotImage = styled.Image<{
  isSelected: boolean;
  cameraShot: string;
}>`
  width: 75px;
  height: 100px;
  opacity: ${({isSelected, cameraShot}) =>
    !cameraShot ? 1 : isSelected ? 1 : 0.2};
`;

// 카메라샷 이미지 안의 텍스트 스타일
export const CameraShotImageText = styled.Text<{isSelected: boolean}>`
  position: absolute;
  bottom: 5px;
  color: ${({isSelected}) => (isSelected ? colors.white : colors.first_grey)};
  font-size: ${fontSize.B2};
  font-weight: ${fontWeight.M};
`;
