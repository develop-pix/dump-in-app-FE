import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const FilterFormContainer = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const FilterFormBody = styled.View`
    background-color: ${colors.darkgrey};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const FilterFormHeader = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    margin-bottom: 12px;
`;

export const FilterFormTitleContainer = styled.View``;

export const CloseButton = styled.TouchableOpacity`
    position: absolute;
    width: 44px;
    height: 44px;
    right: 10px;
`;

export const FilterOptionContainer = styled.View`
    padding: 10px 20px;
    gap: 28px;
`;

export const FilterButtonBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
`;

export const Margin = styled.View`
    margin-vertical: 15px;
`;

export const BottomBounceView = styled.View`
    background-color: ${colors.lightblack};
    position: absolute;
    width: 100%;
`;
