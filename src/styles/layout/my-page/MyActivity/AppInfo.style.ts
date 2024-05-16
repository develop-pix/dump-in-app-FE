import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const AppInfoSafeContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.lightblack};
`;

export const AppInfoContainer = styled.View`
    flex: 1;
    padding: 0px 20px;
    gap: 10px;
`;

export const AppInfoTextContainer = styled.View`
    padding: 10px 0px;
    align-items: flex-end;
`;

export const LicenseInfoTextContainer = styled.View`
    flex: 1;
    padding: 10px 0px;
    gap: 20px;
`;

export const LicenseInfoDescContainer = styled.View``;

export const AppMenuItemContainer = styled.TouchableOpacity`
    padding: 10px 0px;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.darkgrey};
`;
