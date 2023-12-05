import React from 'react';

import {BranchDistanceProps} from '../../interfaces/Branch.interface';
import {DistanceForm} from '../../utils/FormChange';
import {FontWhiteSmallerThin} from '../../styles/layout/reuse/text/Text.style';
import {
  BranchDistanceContainer,
  BranchDistanceForm,
} from '../../styles/layout/branch/BranchDistance.style';

export default function BranchDistance({distance}: BranchDistanceProps) {
  return (
    <BranchDistanceContainer>
      <BranchDistanceForm>
        <FontWhiteSmallerThin>
          내 위치로부터 {DistanceForm(distance)}
        </FontWhiteSmallerThin>
      </BranchDistanceForm>
    </BranchDistanceContainer>
  );
}
