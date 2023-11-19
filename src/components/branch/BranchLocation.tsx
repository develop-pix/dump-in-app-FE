import React from 'react';
import {Platform} from 'react-native';
import {BranchLocationContainer} from '../../styles/layout/branch/Branch.style';
import GoBackButton from '../reuse/button/GoBackButton';
import BranchDistance from './BranchDistance';
import {BranchLocationProps} from '../../interfaces/Branch.interface';
import {GoBackButtonContainerWithSafeArea} from '../../styles/layout/reuse/button/GoBackButton.style';

export default function BranchLocation({
  geolocation,
  distance,
}: BranchLocationProps) {
  const platform = Platform.OS;
  console.log('BranchLocation-geolocation:' + geolocation);
  console.log('BranchLocation-distance:' + distance);
  return (
    <BranchLocationContainer>
      <GoBackButtonContainerWithSafeArea platform={platform}>
        <GoBackButton />
      </GoBackButtonContainerWithSafeArea>
      <BranchDistance />
    </BranchLocationContainer>
  );
}
