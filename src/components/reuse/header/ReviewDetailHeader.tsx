import {Platform} from 'react-native';
import React from 'react';
import ArrowBackIcon from '../../../assets/image/icon/arrow_back_white.svg';
import SeeMoreIcon from '../../../assets/image/icon/btn_more.svg';
import LocationIcon from '../../../assets/image/icon/location_white.svg';
import {FontWhiteNormalMedium} from '../../../styles/layout/reuse/text/Text.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';
import {ReviewDetailHeaderProps} from '../../../interfaces/reuse/header/ReviewDetailHeader.interface';
import {
  BranchNameContainer,
  CloseButtonWithBranchNameContainer,
  CloseImageContainer,
  ReviewDescTextContainer,
  ReviewManageButtonContainer,
} from '../../../styles/layout/reuse/header/ReviewDetailHeader';

export default function ReviewDetailHeader({
  photoboothName,
  branchName,
  mine,
  setOpenModal,
}: ReviewDetailHeaderProps) {
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
        <ArrowBackIcon width={16} height={16} />
      </CloseImageContainer>
      <BranchNameContainer>
        <LocationIcon width={20} height={24} />
        <ReviewDescTextContainer>
          <FontWhiteNormalMedium>{photoboothName}</FontWhiteNormalMedium>
          <FontWhiteNormalMedium>{branchName}</FontWhiteNormalMedium>
        </ReviewDescTextContainer>
      </BranchNameContainer>
      {mine ? (
        <ReviewManageButtonContainer onPress={onPressOpenModal}>
          <SeeMoreIcon width={4} height={16} />
        </ReviewManageButtonContainer>
      ) : (
        <ReviewManageButtonContainer />
      )}
    </CloseButtonWithBranchNameContainer>
  );
}
