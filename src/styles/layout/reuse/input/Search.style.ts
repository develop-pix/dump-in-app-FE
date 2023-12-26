import styled from 'styled-components/native';
import {colors} from '../../../base/Variable';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 10px 0px 20px 0px;
`;

export const SearchWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 46px;
  background-color: ${colors.darkgrey};
  border-radius: 10px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: `${colors.lightgrey}`,
})`
  margin-left: 10px;
  color: ${colors.white};
`;

export const SearchButtonIconContainer = styled.View`
  margin-left: 10px;
  margin-right: 10px;
`;
