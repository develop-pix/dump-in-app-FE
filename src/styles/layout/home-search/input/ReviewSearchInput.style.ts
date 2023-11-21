import styled from 'styled-components/native';
import {colors} from '../../../base/Variable';

export const ReviewSearchForm = styled.SafeAreaView`
  flex: 1;
`;

export const ReviewSearchContainer = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SearchResultAlertContainer = styled.View`
  width: 90%;
  margin: -20px auto 0px;
  border-bottom-width: 1px;
  border-color: ${colors.third_grey};
`;
