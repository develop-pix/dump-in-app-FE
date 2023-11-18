import React from 'react';
import {Platform} from 'react-native';
import GoBackButton from '../reuse/button/GoBackButton';
import {GoBackButtonContainerWithSafeArea} from '../../styles/layout/reuse/button/GoBackButton.style';
import {HomeSearchSafeContainer} from '../../styles/layout/home-search/HomeSearch.style';
import ReviewSearchInput from './input/ReviewSearchInput';

export default function HomeSearch() {
  const platform = Platform.OS;

  return (
    <HomeSearchSafeContainer>
      <GoBackButtonContainerWithSafeArea platform={platform}>
        <GoBackButton />
      </GoBackButtonContainerWithSafeArea>

      <ReviewSearchInput />
    </HomeSearchSafeContainer>
  );
}
