import React, {useState} from 'react';

import FavoirteButton from '../reuse/button/FavoritetButton';
import {BranchTitleProps} from '../../interfaces/Branch.interface';
import {TagsArrayToHashTagArrayForm} from '../../utils/FormChange';
import {
  FontWhiteGreySmallestSemibold,
  FontYellowSmallerMediumWithLineSpacing,
  FontWhiteBiggestSemibold,
} from '../../styles/layout/reuse/text/Text.style';
import {
  BranchHashTagsContainer,
  BranchNameContainer,
  BranchTitleContainer,
  TitleContainer,
} from '../../styles/layout/branch/BranchTitle.style';

export default function BranchTitle({
  photoboothName,
  branchName,
  branchHashtag,
  myBranch,
}: BranchTitleProps) {
  const [favorite, setFavorite] = useState<boolean>(myBranch);

  return (
    <BranchTitleContainer>
      <TitleContainer>
        <BranchNameContainer>
          <FontWhiteBiggestSemibold>{photoboothName}</FontWhiteBiggestSemibold>
          <FontWhiteGreySmallestSemibold>
            {branchName}
          </FontWhiteGreySmallestSemibold>
        </BranchNameContainer>
        <BranchHashTagsContainer>
          {TagsArrayToHashTagArrayForm(branchHashtag).map(tag => (
            <FontYellowSmallerMediumWithLineSpacing key={tag}>
              {tag}
            </FontYellowSmallerMediumWithLineSpacing>
          ))}
        </BranchHashTagsContainer>
      </TitleContainer>
      <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
    </BranchTitleContainer>
  );
}
