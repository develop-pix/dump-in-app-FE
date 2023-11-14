import React, {useState} from 'react';
import {
  BranchName,
  BranchNameContainer,
  BranchTitleContainer,
  Hashtags,
  PhotoboothName,
  TitleContainer,
} from '../../styles/layout/branch/Branch';
import FavoirteButton from '../reuse/button/FavoritetButton';
import {BranchTitleProps} from '../../interfaces/Branch.interface';

export default function BranchTitle({
  photoboothName,
  branchName,
  branchHashtag,
  myBranch,
}: BranchTitleProps) {
  const [favorite, setFavorite] = useState<boolean>(myBranch);
  branchHashtag.unshift(' ');
  return (
    <BranchTitleContainer>
      <TitleContainer>
        <BranchNameContainer>
          <PhotoboothName>{photoboothName}</PhotoboothName>
          <BranchName>{branchName}</BranchName>
        </BranchNameContainer>
        <Hashtags>{branchHashtag.join(' #')}</Hashtags>
      </TitleContainer>
      <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
    </BranchTitleContainer>
  );
}
