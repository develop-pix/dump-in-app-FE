import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const Wrapper = styled.View`
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 16px;
    padding-horizontal: 20px;
`;

export const SearchWrapper = styled.View`
    flex-direction: row;
    width: 100%;
    height: 46px;
    justify-content: space-between;
    padding-horizontal: 16px;
    align-items: center;
    background-color: ${colors.darkgrey};
    border-radius: 10px;
`;

export const SearchInput = styled.TextInput.attrs({
    placeholderTextColor: `${colors.lightgrey}`,
})`
    margin-left: 10px;
    color: ${colors.white};
    font-weight: 600;
    font-size: 16px;
`;

export const SearchButtonIconContainer = styled.View`
    margin-left: 10px;
    margin-right: 10px;
`;
