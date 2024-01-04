import React from 'react';
import {Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {colors} from '../../../styles/base/Variable';

export default function SkeletonCategoryPhotoBooth() {
  return (
    <SkeletonPlaceholder
      backgroundColor={colors.blackgrey}
      highlightColor={colors.lightgrey}>
      <SkeletonPlaceholder.Item
        width={Dimensions.get('window').width}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop={20}>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <SkeletonPlaceholder.Item
              key={index}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-evenly"
              width={Dimensions.get('window').width}
              marginBottom={10}>
              <SkeletonPlaceholder.Item
                width={Dimensions.get('window').width * 0.44}
                height={113}
                borderRadius={10}
              />
              <SkeletonPlaceholder.Item
                width={Dimensions.get('window').width * 0.44}
                height={113}
                borderRadius={10}
              />
            </SkeletonPlaceholder.Item>
          ))}
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}
