import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../../base/Variable';

export const MyActivityContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 30px;
`;

export const ActivityItemContainer = styled.TouchableOpacity<{
  isActive: boolean;
}>`
  align-items: center;
  border-bottom-width: ${({isActive}) => (isActive ? '1px' : '0px')};
  border-color: ${colors.white};
  padding: 10px 5px;
`;

export const ActivityIcon = styled.Image`
  height: 20px;
`;

export const ActivityIconText = styled.Text<{isActive: boolean}>`
  margin-top: 5px;
  color: ${({isActive}) => (isActive ? colors.white : colors.whitegrey)};
  font-size: ${fontSize.smallest};
  font-weight: ${fontWeight.medium};
`;
