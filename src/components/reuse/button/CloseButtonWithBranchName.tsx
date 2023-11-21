import {Platform} from 'react-native';
import React from 'react';
import {
  BranchNameContainer,
  CloseButtonWithBranchNameContainer,
  CloseImage,
  CloseImageContainer,
  LocationImage,
  ReviewDescTextContainer,
} from '../../../styles/layout/reuse/button/CloseButtonWithBranchName.style';
import CloseIcon from '../../../assets/image/reuse/close-btn.png';
import LocationIcon from '../../../assets/image/reuse/location_white.png';
import {ReviewDescText} from '../../../styles/layout/reuse/text/Text.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';
import {CloseButtonWithBranchNameProps} from '../../../interfaces/reuse/button/Button.interfaces';

export default function CloseButtonWithBranchName({
  photoboothName,
  branchName,
}: CloseButtonWithBranchNameProps) {
  const platform = Platform.OS;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const onPressClose = () => {
    navigation.goBack();
  };

  return (
    <CloseButtonWithBranchNameContainer platform={platform}>
      <BranchNameContainer>
        <LocationImage source={LocationIcon} />
        <ReviewDescTextContainer>
          <ReviewDescText>{photoboothName}</ReviewDescText>
          <ReviewDescText>{branchName}</ReviewDescText>
        </ReviewDescTextContainer>
      </BranchNameContainer>
      <CloseImageContainer onPress={onPressClose}>
        <CloseImage source={CloseIcon} />
      </CloseImageContainer>
    </CloseButtonWithBranchNameContainer>
  );
}
