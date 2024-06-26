import styled from 'styled-components/native';

// platform이 ios일 경우, android일 경우, 나머지일 경우 분리
export const CloseModalButtonContainer = styled.View<{
    platform: 'web' | 'ios' | 'android' | 'windows' | 'macos';
}>`
    justify-content: center;
    width: 100%;
    height: 44px;
    margin-top: ${props => (props.platform === 'ios' ? '0px' : props.platform === 'android' ? '10px' : null)};
    margin-bottom: 10px;
`;

export const BackImageContainer = styled.View`
    margin-left: 20px;
`;
