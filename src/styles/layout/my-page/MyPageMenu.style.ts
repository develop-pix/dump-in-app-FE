import styled from 'styled-components/native';
import {colors} from '../../base/Variable';

export const MenuSafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.lightblack};
`;

export const CloseModalButtonContainer = styled.View`
  align-self: flex-start;
  margin-top: 5px;
`;

export const MenuContentContainer = styled.View`
  padding: 0px 20px;
`;

export const TextContainer = styled.View`
  padding: 10px 0px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.darkgrey};
`;

export const UserTextContainer = styled.View`
  padding: 10px 0px;
`;

export const MenuItemContainer = styled.TouchableOpacity`
  padding: 10px 0px;
  flex-direction: row;
  justify-content: space-between;
`;