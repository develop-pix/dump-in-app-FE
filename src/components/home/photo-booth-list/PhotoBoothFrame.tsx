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
  PhotoBoothName,
} from '../../../styles/layout/home/photo-booth-list/PhotoBoothFrame.style';
import {colors} from '../../../styles/base/Variable';

export default function PhotoBoothFrame({data}: PhotoBoothFrameProps) {
  return (
    <PhotoBoothFrameContainer>
      <PhotoBoothFrameImage source={{uri: data['representative-image']}} />
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

      {data['my-photobooth'] && <TagImage source={PickImage} />}

      <PhotoBoothInfo>
        <PhotoBoothNameContainer>
          <LocationIcon source={LocationImage} />
          <PhotoBoothName>{data['photobooth-name']}</PhotoBoothName>
        </PhotoBoothNameContainer>
      </PhotoBoothInfo>
    </PhotoBoothFrameContainer>
  );
}
