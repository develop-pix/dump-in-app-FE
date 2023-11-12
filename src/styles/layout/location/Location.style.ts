import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../base/Variable';

/* LocationSearch */
export const SearchContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.fourth_grey};
`;

export const Test = styled.View`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
/* SearchBranchList */

export const SearchBranchScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {paddingBottom: 100},
})`
  width: 100%;
`;

export const SearchBranchContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ListContainer = styled.View`
  width: 90%;
`;

/* BranchList */

export const BranchListContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 44px;
  border-bottom-width: 1px;
`;

export const LocationIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-top: 10px;
`;

export const LocationInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;
export const BranchNameWrapper = styled.View`
  margin-left: 10px;
  margin-right: 30px;
  display: flex;
  align-items: center;
`;

export const BranchNameText = styled.Text`
  color: ${colors.first_grey};
  font-size: ${fontSize.H3};
  font-weight: ${fontWeight.M};
`;

export const BranchDistanceWrapper = styled.View`
  display: flex;
  align-items: center;
`;

export const BranchDistanceText = styled.Text`
  color: ${colors.second_grey};
  font-size: ${fontSize.B2};
  font-weight: ${fontWeight.M};
`;
