import React from 'react';
import {
  BranchDistanceContainer,
  BranchDistanceForm,
  DistanceText,
} from '../../styles/layout/branch/Branch';

export default function BranchDistance() {
  return (
    <BranchDistanceContainer>
      <BranchDistanceForm>
        <DistanceText>내 위치로부터 350m</DistanceText>
      </BranchDistanceForm>
    </BranchDistanceContainer>
  );
}
