import styled from 'styled-components/native';

import { colors, fontSize, fontWeight, loginColors } from '../../base/Variable';

export const NaverLoginContainer = styled.View`
    align-items: center;
    margin-top: 10px;
`;

export const NaverInfoContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 360px;
    height: 54px;
    background-color: ${loginColors.naver};
    border-radius: 12px;
    position: relative;
`;

export const NaverIconWrapper = styled.View`
    position: absolute;
    left: 26%;
`;

export const NaverText = styled.Text`
    color: ${colors.white};
    font-size: ${fontSize.normal};
    font-weight: ${fontWeight.semibold};
    margin-left: 40px;
`;
