import React, {useState} from 'react';
import {BranchCardProps} from '../../../interfaces/Location.interface';
import {
  FontWhiteGreySmallerThick,
  FontWhiteBiggestThickWithLineHeight,
  FontWhiteGreySmallestThin,
  FontYellowSmallerThinWithLineSpacing,

} from '../../../styles/layout/reuse/text/Text.style';
import {
  DistanceForm,
  TagsArrayToHashTagArrayForm,
} from '../../../utils/FormChange';
import FavoirteButton from '../../reuse/button/FavoritetButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  BranchCardBottom,
  BranchCardBranchNameWrapper,
  BranchCardDescription,
  BranchCardHashtag,
  BranchCardHorizonLine,
  BranchCardLogo,
  BranchCardTop,
  CardContainer,
  TouchableCardContainer,
} from '../../../styles/layout/location/BranchCard.style';

export default function BranchCard({
  branchID,
  imageLogo,
  photoboothName,
  branchName,
  hashtag,
  myBranch,
  distance,
  elapsedTime,
}: BranchCardProps) {
  const [favorite, setFavorite] = useState<boolean>(myBranch);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const onPressBranchCard = () => {
    if (isFocused) {
      navigation.push('Branch', {branchID: branchID});
    }
  };

  return (
    <TouchableCardContainer activeOpacity={0.95} onPress={onPressBranchCard}>
      <CardContainer>
        <BranchCardTop>
          <BranchCardLogo source={{uri: imageLogo}} />
          <BranchCardDescription>
            <BranchCardBranchNameWrapper>
              <FontWhiteBiggestThickWithLineHeight>
                {photoboothName}
              </FontWhiteBiggestThickWithLineHeight>
              <FontWhiteGreySmallerThick>
                {branchName}
              </FontWhiteGreySmallerThick>
            </BranchCardBranchNameWrapper>
            <BranchCardHashtag>
              {TagsArrayToHashTagArrayForm(hashtag).map(tag => (
                <FontYellowSmallerThinWithLineSpacing key={tag}>
                  {tag}
                </FontYellowSmallerThinWithLineSpacing>
              ))}
            </BranchCardHashtag>
          </BranchCardDescription>
          <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
        </BranchCardTop>
        <BranchCardHorizonLine />
        <BranchCardBottom>
          <FontWhiteGreySmallestThin>
            내 위치로부터 {`${DistanceForm(distance)}`} ·
          </FontWhiteGreySmallestThin>
          <FontWhiteGreySmallestThin>
            약 {elapsedTime} 소요
          </FontWhiteGreySmallestThin>
        </BranchCardBottom>
      </CardContainer>
    </TouchableCardContainer>
  );
}
