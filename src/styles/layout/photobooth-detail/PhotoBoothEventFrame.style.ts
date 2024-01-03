import styled from 'styled-components/native';

import { colors } from '../../base/Variable';

export const EventItem = styled.TouchableOpacity`
    width: 100%;
    height: 145px;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 10px;
`;

export const EventImageWrapper = styled.View`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: ${colors.white};
`;

export const EventImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export const FavoirteIcon = styled.View`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const EventInfo = styled.View`
    position: absolute;
    bottom: 10px;
    left: 10px;
    padding: 5px;
`;

export const EventTitleContainer = styled.View`
    margin-bottom: 5px;
`;
