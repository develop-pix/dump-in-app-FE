import {TouchableOpacity} from 'react-native';
import React from 'react';
import {BackImage} from '../../../styles/layout/reuse/button/GoBackButton.style';
import BackIcon from '../../../assets/image/reuse/arrow_back.png';
import {useNavigation} from '@react-navigation/native';

export default function GoBackButton() {
  const navigation = useNavigation();
  const onPressGoBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={onPressGoBack}>
      <BackImage source={BackIcon} />
    </TouchableOpacity>
  );
}
