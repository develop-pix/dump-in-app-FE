import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Dimensions} from 'react-native';
import {colors} from '../../../styles/base/Variable';

export default function SkeletonHomeDataCollection() {
  return (
    <SkeletonPlaceholder
      backgroundColor={colors.blackgrey}
      highlightColor={colors.lightgrey}>
      <SkeletonPlaceholder.Item
        width={Dimensions.get('window').width}
        flexDirection="row"
        justifyContent="center">
        <SkeletonPlaceholder.Item
          flexDirection="column"
          gap={10}
          flexWrap="wrap">
          <SkeletonPlaceholder.Item
            width={Dimensions.get('window').width * 0.45}
            aspectRatio={1}
            borderRadius={20}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('window').width * 0.45}
            aspectRatio={0.75}
            borderRadius={20}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('window').width * 0.45}
            aspectRatio={0.75}
            borderRadius={20}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('window').width * 0.45}
            aspectRatio={0.75}
            borderRadius={20}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('window').width * 0.45}
            aspectRatio={1}
            borderRadius={20}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('window').width * 0.45}
            aspectRatio={0.75}
            borderRadius={20}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}
