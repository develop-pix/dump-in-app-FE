import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const ReviewModalContainer = styled.View<{
    platform: 'web' | 'ios' | 'android' | 'windows' | 'macos';
}>`
    flex: 1;
    background-color: ${colors.blackgrey};
    align-items: center;
    border: 1px solid ${colors.blackgrey};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    height: 134px;
    position: absolute;
    bottom: ${props => (props.platform === 'ios' ? 875 : 900)}px;
`;

export const ReviewModalWrapper = styled.View`
    width: 90%;
    height: 100%;
    padding: 17px 0px;
    justify-content: space-around;
`;

export const ReviewTouchableOpacity = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const HorizonLine = styled.View`
    border: 0.5px solid ${colors.lightgrey};
`;
