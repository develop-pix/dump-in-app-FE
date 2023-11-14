import React from 'react';
import {
  BranchDistanceText,
  BranchDistanceWrapper,
  BranchListContainer,
  BranchNameText,
  BranchNameWrapper,
  LocationIcon,
  LocationInfo,
} from '../../../styles/layout/location/Location.style';
import {BranchListProps} from '../../../interfaces/Location.interface';
import LocationIco from '../../../assets/image/reuse/location.png';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';

export default function BranchList({
  branchName,
  distance,
  location,
  setLocation,
  setModal,
  branchID,
}: BranchListProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

  const onSelectLocation = () => {
    setLocation(location);
    setModal(false);
    navigation.navigate('Branch', {branchID: branchID});
  };
  return (
    <BranchListContainer onPress={onSelectLocation}>
      <LocationIcon source={LocationIco} />
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
