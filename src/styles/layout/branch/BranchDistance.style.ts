import styled from 'styled-components/native';
import {colors} from '../../base/Variable';

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
