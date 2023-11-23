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
} from '../../../styles/layout/home/photo-booth-list/Review.style';
import {colors} from '../../../styles/base/Variable';

export default function ReviewFrame({data}: ReviewFrameProps) {
  return (
    <ReviewFrameContainer>
      <ReviewFrameImage source={{uri: data['representative-image']}} />
      <LinearGradient
        colors={['transparent', colors.black]}
        locations={[0.1, 0.8]}
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
          <ReviewName>{data['branch-name']}</ReviewName>
        </ReviewNameContainer>
      </ReviewInfo>
    </ReviewFrameContainer>
  );
}
