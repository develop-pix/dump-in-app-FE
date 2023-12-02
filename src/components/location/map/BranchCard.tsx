import React, {useState} from 'react';
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
} from '../../../styles/layout/location/Map.style';
import {BranchCardProps} from '../../../interfaces/Location.interface';
import {
  BranchCardBranchName,
  BranchCardPhotoboothName,
  DescriptionText,
  HashtagsText,
} from '../../../styles/layout/reuse/text/Text.style';
import {
  DistanceForm,
  TagsArrayToHashTagArrayForm,
} from '../../../utils/FormChange';
import FavoirteButton from '../../reuse/button/FavoritetButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';
import {useIsFocused, useNavigation} from '@react-navigation/native';

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
              <BranchCardPhotoboothName>
                {photoboothName}
              </BranchCardPhotoboothName>
              <BranchCardBranchName>{branchName}</BranchCardBranchName>
            </BranchCardBranchNameWrapper>
            <BranchCardHashtag>
              {TagsArrayToHashTagArrayForm(hashtag).map(tag => (
                <HashtagsText key={tag}>{tag}</HashtagsText>
              ))}
            </BranchCardHashtag>
          </BranchCardDescription>
          <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
        </BranchCardTop>
        <BranchCardHorizonLine />
        <BranchCardBottom>
          <DescriptionText>
            내 위치로부터 {`${DistanceForm(distance)}`} ·
          </DescriptionText>
          <DescriptionText> 약 {elapsedTime} 소요</DescriptionText>
        </BranchCardBottom>
      </CardContainer>
    </TouchableCardContainer>
  );
}
