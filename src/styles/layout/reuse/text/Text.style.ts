import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../../base/Variable';

// 글씨체 지정 필요함 - Montserrat

export const SubTitleText = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.T2};
  font-weight: ${fontWeight.SB};
  letter-spacing: 3px;
`;
