import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const NotificationSafeContainer = styled.SafeAreaView`
    flex: 1;
    justify-content: space-between;
    background-color: ${colors.lightblack};
`;

export const NoticeContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const NotificationContentContainer = styled.View`
    align-items: center;
`;

export const DeleteContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const DeleteIconWrapper = styled.View`
    margin-left: 6px;
`;

export const NotificationItemContainer = styled.View`
    padding: 10px 0px;
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.darkgrey};
    gap: 10px;
`;

export const InfoWrapper = styled.View`
    width: 80%;
    gap: 6px;
`;
