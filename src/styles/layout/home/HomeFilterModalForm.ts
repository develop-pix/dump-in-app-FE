import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../base/Variable';

export const FilterFormContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const FilterFormBody = styled.View`
  height: 92%;
  background-color: ${colors.third_grey};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const FilterFormHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px 0px;
`;

export const FilterFormTitle = styled.Text`
  color: ${colors.first_grey};
  font-size: ${fontSize.H2};
  font-weight: ${fontWeight.SB};
  flex: 1;
  text-align: center;
`;

export const CloseButton = styled.TouchableOpacity``;

export const CloseButtonImage = styled.Image`
  width: 44px;
  height: 44px;
`;

export const FilterOptionContainer = styled.View`
  padding: 10px 20px;
`;

export const FilterButtonBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0px;
  padding: 20px 10px;
`;

export const Margin = styled.View`
  margin-vertical: 15px;
`;
