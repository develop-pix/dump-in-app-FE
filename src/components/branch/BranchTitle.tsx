import { useState } from 'react';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
import { BranchTitleProps } from 'interfaces/Branch.interface';
import {
    BranchHashTagsContainer,
    BranchNameContainer,
    BranchTitleContainer,
    TitleContainer,
} from 'styles/layout/branch/BranchTitle.style';
import {
    FontWhiteBiggestSemibold,
    FontWhiteGreySmallestSemibold,
    FontYellowSmallerMediumWithLineSpacing,
} from 'styles/layout/reuse/text/Text.style';
import { TagsArrayToHashTagArrayForm } from 'utils/FormChange';

export default function BranchTitle({ photoBoothName, branchName, branchHashtag, myBranch }: BranchTitleProps) {
    const [favorite, setFavorite] = useState<boolean>(myBranch);

    return (
        <BranchTitleContainer>
            <TitleContainer>
                <BranchNameContainer>
                    <FontWhiteBiggestSemibold>{photoBoothName}</FontWhiteBiggestSemibold>
                    <FontWhiteGreySmallestSemibold>{branchName}</FontWhiteGreySmallestSemibold>
                </BranchNameContainer>
                <BranchHashTagsContainer>
                    {TagsArrayToHashTagArrayForm(branchHashtag).map(tag => (
                        <FontYellowSmallerMediumWithLineSpacing key={tag}>{tag}</FontYellowSmallerMediumWithLineSpacing>
                    ))}
                </BranchHashTagsContainer>
            </TitleContainer>
            <FavoriteButton favorite={favorite} setFavorite={setFavorite} />
        </BranchTitleContainer>
    );
}
