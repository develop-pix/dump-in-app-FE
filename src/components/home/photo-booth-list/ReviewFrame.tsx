import React from 'react';
import {ReviewFrameProps} from '../../../interfaces/Home.interface';
import LocationImage from '../../../assets/image/reuse/location.png';
import LinearGradient from 'react-native-linear-gradient';
import {
  ReviewFrameContainer,
  ReviewFrameImage,
  ReviewInfo,
  ReviewNameContainer,
  LocationIcon,
} from '../../../styles/layout/home/photo-booth-list/ReviewFrame.style';
import {colors} from '../../../styles/base/Variable';
import {useNavigation, useIsFocused, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';
import {FontWhiteGreySmallerThinWithLineHeight} from '../../../styles/layout/reuse/text/Text.style';
import {ScreenName} from '../../../interfaces/NavigationBar';

export default function ReviewFrame({data}: ReviewFrameProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const route = useRoute();

  const onPressReview = () => {
    const currentScreen = (route.params as {screen?: ScreenName})?.screen;
    if (isFocused) {
      navigation.push('ReviewDetail', {
        reviewID: data.reviewID,
        screen: currentScreen,
      });
    }
  };

  return (
    <ReviewFrameContainer activeOpacity={0.9} onPress={onPressReview}>
      <ReviewFrameImage source={{uri: data.representativeImage}} />
      <LinearGradient
        colors={['transparent', colors.black]}
        locations={[0.1, 1]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 150,
        }}
      />

      <ReviewInfo>
        <ReviewNameContainer>
          <LocationIcon source={LocationImage} />
          <FontWhiteGreySmallerThinWithLineHeight>
            {data.branchName}
          </FontWhiteGreySmallerThinWithLineHeight>
        </ReviewNameContainer>
      </ReviewInfo>
    </ReviewFrameContainer>
  );
}
