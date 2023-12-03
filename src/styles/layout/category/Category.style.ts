import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../base/Variable';

export const CategoryContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  padding-top: 30px;
`;

export const PageBar = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 0px 20px;
`;

export const PageBarText = styled.Text<{selected: boolean}>`
  margin-right: 20px;
  color: ${props => (props.selected ? colors.white : colors.second_grey)};
  font-size: ${fontSize.T1};
  font-weight: ${fontWeight.SB};
`;
