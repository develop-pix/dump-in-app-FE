import React from 'react';
import {PhotoBoothFrameProps} from '../../../interfaces/Home.interface';
import LocationImage from '../../../assets/image/reuse/location.png';
import PickImage from '../../../assets/image/reuse/pick.png';
import LinearGradient from 'react-native-linear-gradient';
import {
  PhotoBoothFrameContainer,
  PhotoBoothFrameImage,
  TagImage,
  PhotoBoothInfo,
  PhotoBoothNameContainer,
  LocationIcon,
} from '../../../styles/layout/home/photo-booth-list/PhotoBoothFrame.style';
import {colors} from '../../../styles/base/Variable';
import {useNavigation, useIsFocused, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';
import {FontWhiteGreySmallerThinWithLineHeight} from '../../../styles/layout/reuse/text/Text.style';
import {ScreenName} from '../../../interfaces/NavigationBar';

export default function PhotoBoothFrame({data}: PhotoBoothFrameProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const route = useRoute();

  const onPressPhotoBooth = () => {
    const currentScreen = (route.params as {screen: ScreenName}).screen;
    if (isFocused) {
      navigation.push('PhotoBoothDetail', {
        PhotoBoothID: data.photoBoothID,
        screen: currentScreen,
      });
    }
  };

  return (
    <PhotoBoothFrameContainer activeOpacity={0.9} onPress={onPressPhotoBooth}>
      <PhotoBoothFrameImage source={{uri: data.representativeImage}} />
      <LinearGradient
        colors={['transparent', colors.lightblack]}
        locations={[0.1, 1]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 130,
        }}
      />

      <TagImage source={PickImage} />

      <PhotoBoothInfo>
        <PhotoBoothNameContainer>
          <LocationIcon source={LocationImage} />
          <FontWhiteGreySmallerThinWithLineHeight>
            {data.photoboothName}
          </FontWhiteGreySmallerThinWithLineHeight>
        </PhotoBoothNameContainer>
      </PhotoBoothInfo>
    </PhotoBoothFrameContainer>
  );
}
