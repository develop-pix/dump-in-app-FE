import React, {useState} from 'react';

import FavoirteButton from '../reuse/button/FavoritetButton';
import {BranchTitleProps} from '../../interfaces/Branch.interface';
import {TagsArrayToHashTagArrayForm} from '../../utils/FormChange';
import {
  FontWhiteGreySmallestThick,
  FontYellowSmallerThinWithLineSpacing,
  FontWhiteBiggestThick,
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
          <FontWhiteBiggestThick>{photoboothName}</FontWhiteBiggestThick>
          <FontWhiteGreySmallestThick>{branchName}</FontWhiteGreySmallestThick>
        </BranchNameContainer>
        <BranchHashTagsContainer>
          {TagsArrayToHashTagArrayForm(branchHashtag).map(tag => (
            <FontYellowSmallerThinWithLineSpacing key={tag}>
              {tag}
            </FontYellowSmallerThinWithLineSpacing>
          ))}
        </BranchHashTagsContainer>
      </TitleContainer>
      <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
    </BranchTitleContainer>
  );
}
