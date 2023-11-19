import React from 'react';
import {PhotoBoothFrameProps} from '../../interfaces/PhotoBoothList.interface';
import LocationImage from '../../assets/image/reuse/location.png';
import PickImage from '../../assets/image/reuse/pick.png';
import LinearGradient from 'react-native-linear-gradient';
import {
  PhotoBoothFrameContainer,
  FrameImage,
  TagImage,
  PhotoBoothInfo,
  PhotoBoothNameContainer,
  LocationIcon,
  PhotoBoothName,
} from '../../styles/layout/photo-booth-list/PhotoBoothFrame.style';
import {colors} from '../../styles/base/Variable';

export default function PhotoBoothFrame({data}: PhotoBoothFrameProps) {
  return (
    <PhotoBoothFrameContainer>
      <FrameImage source={{uri: data['repersentative-image']}} />
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

      {data['my-branch'] && <TagImage source={PickImage} />}

      <PhotoBoothInfo>
        <PhotoBoothNameContainer>
          <LocationIcon source={LocationImage} />
          <PhotoBoothName>{data['branch-name']}</PhotoBoothName>
        </PhotoBoothNameContainer>
      </PhotoBoothInfo>
    </PhotoBoothFrameContainer>
  );
}
