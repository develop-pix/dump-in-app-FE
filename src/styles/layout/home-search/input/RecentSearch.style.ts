import styled from 'styled-components/native';
import {colors} from '../../../base/Variable';

export const RecentSearchContainer = styled.View`
  padding: 24px 20px 0px 20px;
`;

export const RecentSearchContentContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  width: 335px;
  margin-top: 15px;
`;

export const RecentSearchButton = styled.TouchableOpacity`
  height: 36px;
  padding: 4px 14px 4px 14px;
  border-radius: 8px;
  background-color: ${colors.blackgrey};
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const CloseButtonIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-top: 2px;
`;

export const EmptySearchMessageContainer = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
`;
