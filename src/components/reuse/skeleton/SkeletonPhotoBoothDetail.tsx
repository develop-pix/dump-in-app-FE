import React from 'react';
import {Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {colors} from '../../../styles/base/Variable';

export default function SkeletonPhotoBoothDetail() {
  return (
    <SkeletonPlaceholder
      backgroundColor={colors.blackgrey}
      highlightColor={colors.lightgrey}>
      <SkeletonPlaceholder.Item
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <SkeletonPlaceholder.Item
          width={Dimensions.get('window').width}
          height={500}
        />
        <SkeletonPlaceholder.Item
          width={Dimensions.get('window').width - 40}
          height={145}
          borderRadius={10}
          marginTop={30}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}
