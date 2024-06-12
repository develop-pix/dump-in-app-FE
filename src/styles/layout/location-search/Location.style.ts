import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';
/* LocationSearchContainer*/
export const LocationSearchContainer = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: ${colors.blackgrey};
`;

/* LocationSearchForm */
export const SearchForm = styled.SafeAreaView`
    flex: 1;
`;

export const SearchContainer = styled.View``;
/* SearchBranchList */

export const SearchBranchContainer = styled.View`
    width: 100%;
    align-items: center;
`;

export const ListContainer = styled.View`
    width: 100%;
`;

/* BranchList */

export const BranchListContainer = styled.TouchableOpacity`
    flex-direction: row;
    width: 100%;
    height: 54px;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.darkgrey};
`;

export const LocationDarkIconContainer = styled.View`
    margin-top: 10px;
`;

export const LocationInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
`;
export const BranchNameWrapper = styled.View`
    margin-left: 10px;
    margin-right: 30px;
    align-items: center;
`;

export const BranchDistanceWrapper = styled.View`
    align-items: center;
`;
