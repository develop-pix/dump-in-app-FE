import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../base/Variable';

/* page */
export const BranchContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.black};
`;

export const BranchScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {paddingBottom: 100},
})``;

/* Branch */
export const BranchForm = styled.View`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

/* BranchLocation */
export const BranchLocationContainer = styled.View`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${colors.first_grey};
`;

export const GoBackButtonContainerAndroid = styled.View`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 44px;
`;

export const GoBackButtonContaineriOS = styled.View`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 44px;
  margin-top: 40px;
`;

/* BranchDisatnace */
export const BranchDistanceContainer = styled.View`
  position: absolute;
  bottom: 15px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BranchDistanceForm = styled.View`
  width: 238px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${colors.black};
  opacity: 0.6;
  border: 1px solid;
  border-radius: 12px;
  padding: 10px 0px 10px 0px;
`;

export const DistanceText = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.B2};
  font-weight: ${fontWeight.M};
`;

/* BranchInfo */
export const BranchInfoContainer = styled.View`
  justify-content: center;
  gap: 30px;
  align-items: center;
  width: 100%;
`;

/* BranchTitle */
export const BranchTitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direciton: column;
  justify-content: flex-end;
  gap: 10px;
`;

export const BranchNameContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
`;
export const PhotoboothName = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.H1};
  font-weight: ${fontWeight.SB};
`;

export const BranchName = styled.Text`
  color: ${colors.first_grey};
  font-size: ${fontSize.H5};
  font-weight: ${fontWeight.SB};
`;

export const Hashtags = styled.Text`
  color: ${colors.yellow};
  font-size: ${fontSize.B3};
  font-weight: ${fontWeight.M};
  letter-spacing: -0.5px;
`;

/* BranchInfo */

export const BranchDescriptionContainer = styled.View`
  width: 90%;
  gap: 10px;
`;

export const BranchDesc = styled.View`
  width: 100%;
  background-color: ${colors.fourth_grey};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  gap: 6px;
  padding: 18px 10px;
`;

export const DescContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 90%;
`;

export const LocationIcon = styled.Image`
  width: 16px;
  height: 21px;
`;

export const ClockIcon = styled.Image`
  width: 16px;
  height: 21px;
`;

export const DescText = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: ${colors.second_grey};
  font-size: ${fontSize.B2};
  font-weight: ${fontWeight.M};
`;
