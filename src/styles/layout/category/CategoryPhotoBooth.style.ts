import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../base/Variable';

export const CategoryPhotoBoothContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
  padding-bottom: 100px;
`;

export const PhotoBoothItem = styled.TouchableOpacity`
  width: 44%;
  height: 113px;
  background-color: ${colors.fourth_grey};
  margin-bottom: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const PhotoBoothLogo = styled.Image`
  width: 44px;
  height: 44px;
`;

export const PhotoBoothName = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.B2};
  font-weight: ${fontWeight.M};
  margin-top: 10px;
`;
