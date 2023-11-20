import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../../base/Variable';

// 글씨체 지정 필요함 - Montserrat

export const SubTitleText = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.T2};
  font-weight: ${fontWeight.SB};
  letter-spacing: 3px;
`;

export const AlertText = styled.Text`
  color: ${colors.first_grey};
  font-size: ${fontSize.H3};
  font-weight: ${fontWeight.M};
`;

export const RecommendText = styled.Text`
  color: ${colors.second_grey};
  font-size: ${fontSize.B2};
  font-weight: ${fontWeight.M};
`;

export const HashtagsText = styled.Text`
  color: ${colors.yellow};
  font-size: ${fontSize.B3};
  font-weight: ${fontWeight.M};
  letter-spacing: -0.5px;
`;

export const ReviewDescText = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.H3};
  font-weight: ${fontWeight.M};
`;
