import React from 'react';
import {BranchInfoContainer} from '../../styles/layout/branch/Branch.style';
import BranchTitle from './BranchTitle';
import BranchDescription from './BranchDescription';
import {BranchInfoProps} from '../../interfaces/Branch.interface';

export default function BranchInfo({
  photoboothName,
  branchName,
  branchHashtag,
  address,
  open,
  myBranch,
}: BranchInfoProps) {
  return (
    <BranchInfoContainer>
      <BranchTitle
        photoboothName={photoboothName}
        branchName={branchName}
        branchHashtag={branchHashtag}
        myBranch={myBranch}
      />
      <BranchDescription address={address} open={open} />
    </BranchInfoContainer>
  );
}
