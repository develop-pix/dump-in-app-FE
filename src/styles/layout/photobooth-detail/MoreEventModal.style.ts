import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../base/Variable';

export const MoreEventModalContainer = styled.View`
  height: 80%;
  background-color: ${colors.third_grey};
  padding: 20px;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  color: ${colors.first_grey};
  font-size: ${fontSize.H2};
  font-weight: ${fontWeight.SB};
`;

export const CloseButtonContainer = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;

export const CloseButtonIcon = styled.Image`
  width: 44px;
  height: 44px;
`;