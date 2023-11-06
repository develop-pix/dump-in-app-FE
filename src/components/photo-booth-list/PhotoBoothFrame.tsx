import React from 'react';
import {PhotoBoothFrameProps} from '../../interfaces/PhotoBoothList.interface';
import LocationImage from '../../assets/favicon/location.png';
import PickImage from '../../assets/favicon/pick.png';
import LinearGradient from 'react-native-linear-gradient';
import {
  PhotoBooth,
  FrameImage,
  TagImage,
  BranchInfo,
  BoothNameContainer,
  LocationIcon,
  BoothName,
} from '../../styles/styled-components/photo-booth-list/PhotoBoothFrame';

export default function PhotoBoothFrame({data}: PhotoBoothFrameProps) {
  return (
    <PhotoBooth>
      <FrameImage source={{uri: data['repersentative-image']}} />
      <LinearGradient
        colors={['transparent', 'black']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        locations={[0.7, 1]}
        style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
      />

      {data['my-branch'] && <TagImage source={PickImage} />}

      <BranchInfo>
        <BoothNameContainer>
          <LocationIcon source={LocationImage} />
          <BoothName>{data['branch-name']}</BoothName>
        </BoothNameContainer>
      </BranchInfo>
    </PhotoBooth>
  );
}
