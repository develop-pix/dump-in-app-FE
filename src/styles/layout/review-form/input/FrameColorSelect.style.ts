import styled from 'styled-components/native';

export const FrameColorSelectContainer = styled.View`
    width: 100%;
    gap: 10px;
`;

export const FrameColorSelectWrapper = styled.View`
    flex-direction: row;
    gap: 10px;
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
    border: ${props => (props.colorOption === props.isSelected ? '1px solid white' : '0')};
    opacity: ${props => (props.isSelected === null ? '1' : props.colorOption === props.isSelected ? '1' : '0.2')};
    background-color: ${props => props.colorOption};
`;

export const EtcFrameColorButton = styled.TouchableOpacity<{
    isSelected: string | null;
}>`
    justify-content: center;
    opacity: ${props => (props.isSelected === null ? '1' : props.isSelected === 'gradient' ? '1' : '0.2')};
`;
