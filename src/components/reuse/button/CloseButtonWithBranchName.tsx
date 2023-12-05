import {Platform} from 'react-native';
import React from 'react';
import {
  BranchNameContainer,
  CloseButtonWithBranchNameContainer,
  GoBackImage,
  CloseImageContainer,
  LocationImage,
  ReviewDescTextContainer,
  ReviewManageButtonContainer,
  ReviewManageButton,
} from '../../../styles/layout/reuse/button/CloseButtonWithBranchName.style';
import ArrowBackIcon from '../../../assets/image/reuse/arrow_back.png';
import SeeMoreIcon from '../../../assets/image/reuse/SeeMore.png';
import LocationIcon from '../../../assets/image/reuse/location_white.png';
import {FontWhiteNormalThinWithLineHeight} from '../../../styles/layout/reuse/text/Text.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';
import {CloseButtonWithBranchNameProps} from '../../../interfaces/reuse/button/Button.interfaces';

export default function CloseButtonWithBranchName({
  photoboothName,
  branchName,
  mine,
  setOpenModal,
}: CloseButtonWithBranchNameProps) {
  const platform = Platform.OS;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const onPressClose = () => {
    navigation.goBack();
  };

  const onPressOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <CloseButtonWithBranchNameContainer platform={platform}>
      <CloseImageContainer onPress={onPressClose}>
        <GoBackImage source={ArrowBackIcon} />
      </CloseImageContainer>
      <BranchNameContainer>
        <LocationImage source={LocationIcon} />
        <ReviewDescTextContainer>
          <FontWhiteNormalThinWithLineHeight>
            {photoboothName}
          </FontWhiteNormalThinWithLineHeight>
          <FontWhiteNormalThinWithLineHeight>
            {branchName}
          </FontWhiteNormalThinWithLineHeight>
        </ReviewDescTextContainer>
      </BranchNameContainer>
      {mine ? (
        <ReviewManageButtonContainer onPress={onPressOpenModal}>
          <ReviewManageButton source={SeeMoreIcon} />
        </ReviewManageButtonContainer>
      ) : (
        <ReviewManageButtonContainer />
      )}
    </CloseButtonWithBranchNameContainer>
  );
}
