import React from 'react';
import {
  BranchDistanceWrapper,
  BranchListContainer,
  BranchNameWrapper,
  LocationIconContainer,
  LocationInfo,
} from '../../styles/layout/location-search/Location.style';
import {BranchListProps} from '../../interfaces/Location.interface';
import LocationIcon from '../../assets/image/reuse/location.png';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  LocationSearchParamList,
  RootStackParam,
} from '../../interfaces/NavigationBar';
import {
  FontLightGreySmallerThin,
  FontWhiteGreyNormalThin,
} from '../../styles/layout/reuse/text/Text.style';
import {ScreenName} from '../../interfaces/NavigationBar';

export default function BranchList({
  branchName,
  distance,
  branchID,
}: BranchListProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

  const route =
    useRoute<RouteProp<LocationSearchParamList, 'locationSearchType'>>();

  //진입한 페이지가 지도검색일경우 BranchDetail로 ReviewNew일경우 ReviewNew로 돌아감
  const onSelectLocation = () => {
    const currentScreen = (route.params as {screen: ScreenName}).screen;
    if (route.params.NextPage === 'BranchDetail') {
      navigation.pop();
      navigation.push('Branch', {branchID: branchID, screen: currentScreen});
    } else if (route.params.NextPage === 'ReviewNew') {
      navigation.popToTop();
      navigation.push('ReviewNew', {branchID: branchID, screen: currentScreen});
    }
  };

  return (
    <BranchListContainer onPress={onSelectLocation}>
      <LocationIconContainer source={LocationIcon} />
      <LocationInfo>
        <BranchNameWrapper>
          <FontWhiteGreyNormalThin>{branchName}</FontWhiteGreyNormalThin>
        </BranchNameWrapper>
        <BranchDistanceWrapper>
          <FontLightGreySmallerThin>{distance}</FontLightGreySmallerThin>
        </BranchDistanceWrapper>
      </LocationInfo>
    </BranchListContainer>
  );
}
