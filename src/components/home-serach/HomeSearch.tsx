import React from 'react';
import {Platform} from 'react-native';
import GoBackButton from '../reuse/button/GoBackButton';
import {
  GoBackButtonContaineriOS,
  GoBackButtonContainerAndroid,
} from '../../styles/layout/branch/Branch.style';
import {HomeSearchSafeContainer} from '../../styles/home-search/HomeSearch.style';
import {MarginTop} from '../../styles/layout/reuse/Margin.style';
import ReviewSearchInput from './ReviewSearchInput';

export default function HomeSearch() {
  const platform = Platform.OS;

  return (
    <HomeSearchSafeContainer>
      <MarginTop />

      {platform === 'ios' ? (
        <GoBackButtonContaineriOS>
          <GoBackButton />
        </GoBackButtonContaineriOS>
      ) : platform === 'android' ? (
        <GoBackButtonContainerAndroid>
          <GoBackButton />
        </GoBackButtonContainerAndroid>
      ) : null}

      <ReviewSearchInput />
    </HomeSearchSafeContainer>
  );
}
