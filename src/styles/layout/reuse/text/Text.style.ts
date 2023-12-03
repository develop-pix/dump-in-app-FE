import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../../base/Variable';

// 글씨체 지정 필요함 - Montserrat

/* white */
export const FontWhiteBiggestThick = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.biggest};
  font-weight: ${fontWeight.thick};
`;

export const FontWhiteBiggestThickWithLineHeight = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.biggest};
  font-weight: ${fontWeight.thick};
  line-height: 24px;
`;

export const FontWhiteNormalThick = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.normal};
  font-weight: ${fontWeight.thick};
`;

export const FontWhiteNormalThin = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.normal};
  font-weight: ${fontWeight.thin};
`;

export const FontWhiteNormalThinWithLineHeight = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.normal};
  font-weight: ${fontWeight.thin};
  line-height: 24px;
`;

export const FontWhiteSmallerThickWithLineSpacing = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.smaller};
  font-weight: ${fontWeight.thick};
  letter-spacing: 3px;
`;

export const FontWhiteSmallerThin = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.smaller};
  font-weight: ${fontWeight.thin};
`;

export const FontWhiteSmallestThick = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.smallest};
  font-weight: ${fontWeight.thick};
`;

/* whitegrey */
export const FontWhiteGreyNormalThick = styled.Text`
  color: ${colors.whitegrey};
  font-size: ${fontSize.normal};
  font-weight: ${fontWeight.thick};
`;

export const FontWhiteGreyNormalThin = styled.Text`
  color: ${colors.whitegrey};
  font-size: ${fontSize.normal};
  font-weight: ${fontWeight.thin};
`;

export const FontWhiteGreySmallerThick = styled.Text`
  color: ${colors.whitegrey};
  font-size: ${fontSize.smaller};
  font-weight: ${fontWeight.thick};
`;

export const FontWhiteGreySmallerThin = styled.Text`
  color: ${colors.whitegrey};
  font-size: ${fontSize.smaller};
  font-weight: ${fontWeight.thin};
`;

export const FontWhiteGreySmallerThinWithLineHeight = styled.Text`
  color: ${colors.whitegrey};
  font-size: ${fontSize.smaller};
  font-weight: ${fontWeight.thin};
  line-height: 21px;
`;

export const FontWhiteGreySmallestThick = styled.Text`
  color: ${colors.whitegrey};
  font-size: ${fontSize.smallest};
  font-weight: ${fontWeight.thick};
`;

export const FontWhiteGreySmallestThin = styled.Text`
  color: ${colors.whitegrey};
  font-size: ${fontSize.smallest};
  font-weight: ${fontWeight.thin};
`;

/* lightgrey */
export const FontLightGreySmallerThick = styled.Text`
  color: ${colors.lightgrey};
  font-size: ${fontSize.smaller};
  font-weight: ${fontWeight.thick};
`;

export const FontLightGreySmallerThin = styled.Text`
  color: ${colors.lightgrey};
  font-size: ${fontSize.smaller};
  font-weight: ${fontWeight.thin};
`;

/* yellow */
export const FontYellowSmallerThin = styled.Text`
  color: ${colors.yellow};
  font-size: ${fontSize.smaller};
  font-weight: ${fontWeight.thin};
`;

export const FontYellowSmallerThinWithLineSpacing = styled.Text`
  color: ${colors.yellow};
  font-size: ${fontSize.smaller};
  font-weight: ${fontWeight.thin};
  letter-spacing: -0.5px;
`;
