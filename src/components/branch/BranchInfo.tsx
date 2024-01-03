import { BranchInfoProps } from '../../interfaces/Branch.interface';
import { BranchInfoContainer } from '../../styles/layout/branch/BranchInfo.style';

import BranchDescription from './BranchDescription';
import BranchTitle from './BranchTitle';

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
