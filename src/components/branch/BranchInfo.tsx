import React from 'react';
import {BranchInfoContainer} from '../../styles/layout/branch/Branch';
import BranchTitle from './BranchTitle';
import BranchDescription from './BranchDescription';

export default function BranchInfo() {
  return (
    <BranchInfoContainer>
      <BranchTitle />
      <BranchDescription />
    </BranchInfoContainer>
  );
}
