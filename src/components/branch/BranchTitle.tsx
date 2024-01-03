import React, { useState } from 'react';

import { BranchTitleProps } from '../../interfaces/Branch.interface';
import {
    BranchHashTagsContainer,
    BranchNameContainer,
    BranchTitleContainer,
    TitleContainer,
} from '../../styles/layout/branch/BranchTitle.style';
import {
    FontWhiteBiggestSemibold,
    FontWhiteGreySmallestSemibold,
    FontYellowSmallerMediumWithLineSpacing,
} from '../../styles/layout/reuse/text/Text.style';
import { TagsArrayToHashTagArrayForm } from '../../utils/FormChange';
import FavoirteButton from '../reuse/button/FavoritetButton';

export default function BranchTitle({ photoboothName, branchName, branchHashtag, myBranch }: BranchTitleProps) {
    const [favorite, setFavorite] = useState<boolean>(myBranch);

    return (
        <BranchTitleContainer>
            <TitleContainer>
                <BranchNameContainer>
                    <FontWhiteBiggestSemibold>{photoboothName}</FontWhiteBiggestSemibold>
                    <FontWhiteGreySmallestSemibold>{branchName}</FontWhiteGreySmallestSemibold>
                </BranchNameContainer>
                <BranchHashTagsContainer>
                    {TagsArrayToHashTagArrayForm(branchHashtag).map(tag => (
                        <FontYellowSmallerMediumWithLineSpacing key={tag}>{tag}</FontYellowSmallerMediumWithLineSpacing>
                    ))}
                </BranchHashTagsContainer>
            </TitleContainer>
            <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
        </BranchTitleContainer>
    );
}
