import React from 'react';
import {
  BranchDistanceText,
  BranchDistanceWrapper,
  BranchListContainer,
  BranchNameText,
  BranchNameWrapper,
  LocationIconContainer,
  LocationInfo,
} from '../../styles/layout/location-search/Location.style';
import {BranchListProps} from '../../interfaces/Location.interface';
import LocationIcon from '../../assets/image/reuse/location.png';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../interfaces/NavigationBar';

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
          <BranchNameText>{branchName}</BranchNameText>
        </BranchNameWrapper>
        <BranchDistanceWrapper>
          <BranchDistanceText>{distance}</BranchDistanceText>
        </BranchDistanceWrapper>
      </LocationInfo>
    </BranchListContainer>
  );
}
