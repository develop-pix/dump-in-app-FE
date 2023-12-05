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
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../interfaces/NavigationBar';
import {
  FontLightGreySmallerThin,
  FontWhiteGreyNormalThin,
} from '../../styles/layout/reuse/text/Text.style';

export default function BranchList({
  branchName,
  distance,
  branchID,
}: BranchListProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

  const onSelectLocation = () => {
    navigation.push('Branch', {branchID: branchID});
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
