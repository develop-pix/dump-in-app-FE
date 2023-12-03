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
  ReviewName,
} from '../../../styles/layout/home/photo-booth-list/ReviewFrame.style';
import {colors} from '../../../styles/base/Variable';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';

export default function ReviewFrame({data}: ReviewFrameProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const onPressReview = () => {
    if (isFocused) {
      navigation.push('ReviewDetail', {reviewID: data.reviewID});
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
          height: 130,
        }}
      />

      <ReviewInfo>
        <ReviewNameContainer>
          <LocationIcon source={LocationImage} />
          <ReviewName>{data.branchName}</ReviewName>
        </ReviewNameContainer>
      </ReviewInfo>
    </ReviewFrameContainer>
  );
}
