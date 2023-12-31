import React from 'react';
import {Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {colors} from '../../../styles/base/Variable';

export default function SkeletonMyPageEvent() {
  return (
    <SkeletonPlaceholder
      backgroundColor={colors.blackgrey}
      highlightColor={colors.lightgrey}>
      <SkeletonPlaceholder.Item
        width={Dimensions.get('window').width - 20}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={10}>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <SkeletonPlaceholder.Item
              key={index}
              width={Dimensions.get('window').width - 20}
              height={145}
              borderRadius={10}
            />
          ))}
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}
