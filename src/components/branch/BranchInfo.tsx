import { BranchInfoProps } from 'interfaces/Branch.interface';
import { BranchInfoContainer } from 'styles/layout/branch/BranchInfo.style';

import BranchDescription from './BranchDescription';
import BranchTitle from './BranchTitle';

export default function BranchInfo({
    photoBoothName,
    location,
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
                location={location}
                branchHashtag={branchHashtag}
                isLiked={isLiked}
            />
            <BranchDescription loadAddress={loadAddress} streetAddress={streetAddress} open={operationTime} />
        </BranchInfoContainer>
    );
}
