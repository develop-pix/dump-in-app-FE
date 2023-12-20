import React from 'react';
import {
  OfficialContainer,
  SubTitleContainer,
  OfficialImage,
  OfficialImageWrapper,
  OfficialImagesContainer,
} from '../../../styles/layout/reuse/offcial-images/OfficialImages.style';
import {FontWhiteSmallerSemiboldWithLineSpacing} from '../../../styles/layout/reuse/text/Text.style';
import {OfficialImageProps} from '../../../interfaces/reuse/official-image/OfficialImage.interface';
import SearchNoData from '../alert/SearchNoData';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam, ScreenName} from '../../../interfaces/NavigationBar';

export default function OfficialImages({
  photoBoothName,
  branchName,
  image,
}: OfficialImageProps) {
  const isFocused = useIsFocused();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const route = useRoute();

  const onPressOfficialImage = (url: string) => {
    const currentScreen = (route.params as {screen: ScreenName}).screen;
    if (isFocused) {
      navigation.push('OfficialImageDetail', {
        screen: currentScreen,
        photoBoothName: photoBoothName,
        branchName: branchName,
        image: url,
      });
    }
  };

  return (
    <OfficialContainer>
      <SubTitleContainer>
        <FontWhiteSmallerSemiboldWithLineSpacing>
          OFFICIAL
        </FontWhiteSmallerSemiboldWithLineSpacing>
      </SubTitleContainer>
      {image.length === 0 ? (
        <SearchNoData alertText="등록된 이미지가 없습니다." recommendText="" />
      ) : (
        <OfficialImagesContainer>
          {image.map((url, index) => {
            return (
              <OfficialImageWrapper
                key={index}
                onPress={() => onPressOfficialImage(url)}>
                <OfficialImage source={{uri: url}} />
              </OfficialImageWrapper>
            );
          })}
        </OfficialImagesContainer>
      )}
    </OfficialContainer>
  );
}
