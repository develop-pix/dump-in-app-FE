import styled from 'styled-components/native';
import {colors} from '../../base/Variable';

export const FilterFormContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  elevation: 0;
`;

export const FilterFormBody = styled.View`
  height: 92%;
  background-color: ${colors.darkgrey};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const FilterFormHeader = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 0px 0px 0px;
`;

export const FilterFormTitleContainer = styled.View`
  margin-right: 30%;
`;

export const CloseButton = styled.TouchableOpacity``;

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
