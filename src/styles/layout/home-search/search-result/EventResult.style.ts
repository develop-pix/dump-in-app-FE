import styled from 'styled-components/native';
import {colors} from '../../../base/Variable';

export const EventResultContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0px 20px;
  border-bottom-width: 1px;
  border-color: ${colors.darkgrey};
`;

export const EventListInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0px;
  width: 300px;
`;

export const EventListIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-top: 4px;
  margin-right: 10px;
`;
