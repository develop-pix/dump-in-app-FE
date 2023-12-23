import {Platform} from 'react-native';
import React from 'react';
import ArrowBackIcon from '../../../assets/image/icon/arrow_back_white.svg';
import {FontWhiteNormalMedium} from '../../../styles/layout/reuse/text/Text.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';
import {OfficialImageDetailHeaderProps} from '../../../interfaces/reuse/header/OfficialImageDetailHeader.interface';
import {
  BranchNameContainer,
  BrnachNameTextContainer,
  CloseImageContainer,
  OfficialImageDetailHeaderContainer,
} from '../../../styles/layout/reuse/header/OfficialImageDetailHeader.style';

export default function OfficialImageDetailHeader({
  photoboothName,
}: OfficialImageDetailHeaderProps) {
  const platform = Platform.OS;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const onPressClose = () => {
    navigation.goBack();
  };

  return (
    <OfficialImageDetailHeaderContainer platform={platform}>
      <CloseImageContainer onPress={onPressClose}>
        <ArrowBackIcon width={16} height={16} />
      </CloseImageContainer>
      <BranchNameContainer>
        <BrnachNameTextContainer>
          <FontWhiteNormalMedium>{photoboothName}</FontWhiteNormalMedium>
        </BrnachNameTextContainer>
      </BranchNameContainer>
    </OfficialImageDetailHeaderContainer>
  );
}
