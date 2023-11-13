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

export default function BranchTitle() {
  const [favorite, setFavorite] = useState<boolean>(false);
  return (
    <BranchTitleContainer>
      <TitleContainer>
        <BranchNameContainer>
          <PhotoboothName>포토그레이</PhotoboothName>
          <BranchName>연희중앙점</BranchName>
        </BranchNameContainer>
        <Hashtags>#레드프레임 #컨셉사진 #레드</Hashtags>
      </TitleContainer>
      <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
    </BranchTitleContainer>
  );
}
