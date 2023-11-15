import React, {useState} from 'react';
import {
  BranchName,
  BranchNameContainer,
  BranchTitleContainer,
  Hashtags,
  PhotoboothName,
  TitleContainer,
} from '../../styles/layout/branch/Branch.style';
import FavoirteButton from '../reuse/button/FavoritetButton';
import {BranchTitleProps} from '../../interfaces/Branch.interface';
import {TagsArrayToHashTagArrayForm} from '../../utils/FormChange';

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
        <Hashtags>
          {TagsArrayToHashTagArrayForm(branchHashtag).join(' ')}
        </Hashtags>
      </TitleContainer>
      <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
    </BranchTitleContainer>
  );
}