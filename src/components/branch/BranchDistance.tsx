import React from 'react';
import {
  BranchDistanceContainer,
  BranchDistanceForm,
  DistanceText,
} from '../../styles/layout/branch/Branch.style';
import {BranchDistanceProps} from '../../interfaces/Branch.interface';
import {DistanceForm} from '../../utils/FormChange';

export default function BranchDistance({distance}: BranchDistanceProps) {
  return (
    <BranchDistanceContainer>
      <BranchDistanceForm>
        <DistanceText>내 위치로부터 {DistanceForm(distance)}</DistanceText>
      </BranchDistanceForm>
    </BranchDistanceContainer>
  );
}
