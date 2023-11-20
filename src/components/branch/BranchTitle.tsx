import React, {useState} from 'react';
import {
  BranchHashTagsContainer,
  BranchName,
  BranchNameContainer,
  BranchTitleContainer,
  PhotoboothName,
  TitleContainer,
} from '../../styles/layout/branch/Branch.style';
import FavoirteButton from '../reuse/button/FavoritetButton';
import {BranchTitleProps} from '../../interfaces/Branch.interface';
import {TagsArrayToHashTagArrayForm} from '../../utils/FormChange';
import {HashtagsText} from '../../styles/layout/reuse/text/Text.style';

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
          <PhotoboothName>{photoboothName}</PhotoboothName>
          <BranchName>{branchName}</BranchName>
        </BranchNameContainer>
        <BranchHashTagsContainer>
          {TagsArrayToHashTagArrayForm(branchHashtag).map(tag => (
            <HashtagsText>{tag}</HashtagsText>
          ))}
        </BranchHashTagsContainer>
      </TitleContainer>
      <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
    </BranchTitleContainer>
  );
}
