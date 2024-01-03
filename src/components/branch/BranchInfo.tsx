import { BranchInfoProps } from '../../interfaces/Branch.interface';
import { BranchInfoContainer } from '../../styles/layout/branch/BranchInfo.style';

import BranchDescription from './BranchDescription';
import BranchTitle from './BranchTitle';

export default function BranchInfo({
    photoBoothName,
    branchName,
    branchHashtag,
    address,
    open,
    myBranch,
}: BranchInfoProps) {
    return (
        <BranchInfoContainer>
            <BranchTitle
                photoBoothName={photoBoothName}
                branchName={branchName}
                branchHashtag={branchHashtag}
                myBranch={myBranch}
            />
            <BranchDescription address={address} open={open} />
        </BranchInfoContainer>
    );
}
