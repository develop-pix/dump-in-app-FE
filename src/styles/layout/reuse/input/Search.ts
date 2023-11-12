import styled from 'styled-components/native';
import {colors} from '../../../base/Variable';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const SearchWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 46px;
  background-color: ${colors.third_grey};
  border-radius: 10px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: `${colors.second_grey}`,
})`
  margin-left: 10px;
  color: ${colors.white};
`;

/* PNG 파일 색상 변경 불가능 추루 #757575 색상으로 변경 */
export const SearchButtonIcon = styled.Image`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-right: 10px;
`;
