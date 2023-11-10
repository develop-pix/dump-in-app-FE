import styled from 'styled-components/native';
import {frameColors} from '../../../base/Variable';

// 프레임 색상 버튼 스타일
export const FrameColorButton = styled.TouchableOpacity<{
  isSelected: boolean;
  colorOption: string;
  selectedColor: string;
}>`
  width: 36px;
  height: 36px;
  padding: 4px 14px 4px 14px;
  margin: 5px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${props => props.colorOption};
  border-color: ${props =>
    props.isSelected ? frameColors.white : 'transparent'};
  border-width: 1px;
  opacity: ${props => (!props.isSelected && props.selectedColor ? 0.2 : 1)};
`;

export const FrameColorCheckIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
