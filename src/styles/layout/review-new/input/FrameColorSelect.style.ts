import styled from 'styled-components/native';

export const FrameColorSelectContainer = styled.View`
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

export const FrameColorSelectWrapper = styled.View`
  flex-direction: row;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
`;

export const FrameColorButton = styled.TouchableOpacity<{
  colorOption: string;
  isSelected: string | null;
}>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: ${props =>
    props.colorOption === props.isSelected ? '1px solid white' : '0'};
  opacity: ${props =>
    props.isSelected === null
      ? '1'
      : props.colorOption === props.isSelected
      ? '1'
      : '0.2'};
  background-color: ${props => props.colorOption};
`;

export const EtcFrameColorButton = styled.TouchableOpacity<{
  isSelected: string | null;
}>`
  width: 36px;
  height: 36px;
  justify-content: center;
  opacity: ${props =>
    props.isSelected === null ? '1' : props.isSelected === 'etc' ? '1' : '0.2'};
`;

export const FrameColorCheckIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const EtcFrameColorCheckIcon = styled.Image`
  width: 100%;
  height: 100%;
`;
