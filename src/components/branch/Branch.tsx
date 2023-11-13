import React from 'react';
import {BranchForm, BranchScrollView} from '../../styles/layout/branch/Branch';
import BranchLocation from './BranchLocation';
import BranchInfo from './BranchInfo';
import BranchOfficial from './BranchOfficial';

export default function Branch() {
  return (
    <BranchScrollView>
      <BranchForm>
        <BranchLocation />
        <BranchInfo />
        <BranchOfficial />
      </BranchForm>
    </BranchScrollView>
  );
}
