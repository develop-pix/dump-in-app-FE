import { BranchInfoProps } from 'interfaces/Branch.interface';
import { BranchInfoContainer } from 'styles/layout/branch/BranchInfo.style';

import BranchDescription from './BranchDescription';
import BranchTitle from './BranchTitle';

export default function BranchInfo({
    photoBoothName,
    branchName,
    branchHashtag,
    loadAddress,
    streetAddress,
    operationTime,
    isLiked,
}: BranchInfoProps) {
    return (
        <BranchInfoContainer>
            <BranchTitle
                photoBoothName={photoBoothName}
                branchName={branchName}
                branchHashtag={branchHashtag}
                myBranch={isLiked}
            />
            <BranchDescription loadAddress={loadAddress} streetAddress={streetAddress} open={operationTime} />
        </BranchInfoContainer>
    );
}
