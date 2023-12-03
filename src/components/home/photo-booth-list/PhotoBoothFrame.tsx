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
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';

export default function PhotoBoothFrame({data}: PhotoBoothFrameProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const onPressPhotoBooth = () => {
    if (isFocused) {
      navigation.push('PhotoBoothDetail', {PhotoBoothID: data.photoBoothID});
    }
  };

  return (
    <PhotoBoothFrameContainer activeOpacity={0.9} onPress={onPressPhotoBooth}>
      <PhotoBoothFrameImage source={{uri: data.representativeImage}} />
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

      {data.myPhotobooth && <TagImage source={PickImage} />}

      <PhotoBoothInfo>
        <PhotoBoothNameContainer>
          <LocationIcon source={LocationImage} />
          <PhotoBoothName>{data.photoboothName}</PhotoBoothName>
        </PhotoBoothNameContainer>
      </PhotoBoothInfo>
    </PhotoBoothFrameContainer>
  );
}
