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
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../interfaces/NavigationBar';
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
  const route = useRoute();

  const onSelectLocation = () => {
    const currentScreen = (route.params as {screen?: ScreenName})?.screen;
    navigation.push('Branch', {branchID: branchID, screen: currentScreen});
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
