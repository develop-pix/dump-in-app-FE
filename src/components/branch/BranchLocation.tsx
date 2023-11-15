import React from 'react';
import {Platform} from 'react-native';
import {
  BranchLocationContainer,
  GoBackButtonContainerAndroid,
  GoBackButtonContaineriOS,
} from '../../styles/layout/branch/Branch.style';
import GoBackButton from '../reuse/button/GoBackButton';
import BranchDistance from './BranchDistance';
import {BranchLocationProps} from '../../interfaces/Branch.interface';

export default function BranchLocation({
  geolocation,
  distance,
}: BranchLocationProps) {
  const platform = Platform.OS;

  console.log('BranchLocation-geolocation:' + geolocation);
  console.log('BranchLocation-distance:' + distance);
  return (
    <>
      {platform === 'ios' ? (
        <BranchLocationContainer>
          <GoBackButtonContaineriOS>
            <GoBackButton />
          </GoBackButtonContaineriOS>
          <BranchDistance />
        </BranchLocationContainer>
      ) : platform === 'android' ? (
        <BranchLocationContainer>
          <GoBackButtonContainerAndroid>
            <GoBackButton />
          </GoBackButtonContainerAndroid>
          <BranchDistance />
        </BranchLocationContainer>
      ) : null}
    </>
  );
}
