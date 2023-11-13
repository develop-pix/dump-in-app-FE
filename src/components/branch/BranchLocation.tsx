import React from 'react';
import {Platform} from 'react-native';
import {
  BranchLocationContainer,
  GoBackButtonContainerAndroid,
  GoBackButtonContaineriOS,
} from '../../styles/layout/branch/Branch';
import GoBackButton from '../reuse/button/GoBackButton';
import BranchDistance from './BranchDistance';

export default function BranchLocation() {
  const platform = Platform.OS;
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
