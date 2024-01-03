import styled from 'styled-components/native';

//platform이 ios일 경우, android일 경우, 나머지 일경우 분리
export const GoBackButtonContainer = styled.View<{
    platform: 'ios' | 'android' | 'web' | 'windows' | 'macos';
}>`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 44px;
    margin-top: ${props => (props.platform === 'ios' ? '55' : props.platform === 'android' ? '15' : null)}px;
`;

export const GoBackButtonFloatContainer = styled.View<{
    platform: 'ios' | 'android' | 'web' | 'windows' | 'macos';
}>`
    position: absolute;
    top: ${props => (props.platform === 'ios' ? '75' : props.platform === 'android' ? '30' : null)}px;
`;

export const GoBackButtonContainerWithSafeArea = styled.View<{
    platform: 'ios' | 'android' | 'web' | 'windows' | 'macos';
}>`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 44px;
    margin-top: ${props => (props.platform === 'ios' ? '0px' : props.platform === 'android' ? '15px' : null)};
`;

export const GoBackButtonWithSubmitContainer = styled.View<{
    platform: 'ios' | 'android' | 'web' | 'windows' | 'macos';
}>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 44px;
    margin-top: ${props => (props.platform === 'ios' ? '0px' : props.platform === 'android' ? '15px' : null)};
`;

export const BackButton = styled.TouchableOpacity`
    width: 16px;
    height: 16px;
    margin-left: 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
    margin-right: 20px;
`;
