import React, {useState} from 'react';
import {
  MyPhotoBoothFrameContainer,
  PhotoBoothImage,
  InfoContainer,
  PhotoBoothNameWrapper,
  HashtagContainer,
  HashtagText,
  FavoirteIcon,
} from '../../../styles/layout/my-page/MyActivity/MyPhotoBoothFrame.style';
import {MyPhotoBoothFrameProps} from '../../../interfaces/MyPage.interface';
import FavoirteButton from '../../reuse/button/FavoritetButton';
import {useNavigation, useIsFocused, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';
import {ScreenName} from '../../../interfaces/NavigationBar';
import {TagsArrayToHashTagArrayForm} from '../../../utils/FormChange';
import {
  FontWhiteBiggestThickWithLineHeight,
  FontWhiteGreySmallerThick,
} from '../../../styles/layout/reuse/text/Text.style';

export default function MyPhotoBoothFrame({
  photoBoothData,
}: MyPhotoBoothFrameProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const route = useRoute();

  const onPressPhotoBooth = (id: number) => {
    const currentScreen = (route.params as {screen: ScreenName}).screen;
    if (isFocused) {
      navigation.push('PhotoBoothDetail', {
        PhotoBoothID: id,
        screen: currentScreen,
      });
    }
  };

  const [favorite, setFavorite] = useState<boolean>(
    photoBoothData.myPhotoBooth,
  );

  return (
    <MyPhotoBoothFrameContainer
      onPress={() => onPressPhotoBooth(photoBoothData.photoBoothID)}>
      <PhotoBoothImage source={{uri: photoBoothData.representativeImage}} />
      <InfoContainer>
        <PhotoBoothNameWrapper>
          <FontWhiteBiggestThickWithLineHeight>
            {photoBoothData.photoboothName}
          </FontWhiteBiggestThickWithLineHeight>
          <FontWhiteGreySmallerThick>
            {photoBoothData.branch}
          </FontWhiteGreySmallerThick>
        </PhotoBoothNameWrapper>

        <HashtagContainer>
          {TagsArrayToHashTagArrayForm(photoBoothData.hashtag).map(tag => (
            <HashtagText key={tag}>{tag}</HashtagText>
          ))}
        </HashtagContainer>
      </InfoContainer>

      <FavoirteIcon>
        <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
      </FavoirteIcon>
    </MyPhotoBoothFrameContainer>
  );
}
