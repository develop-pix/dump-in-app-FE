import React from 'react';
import {BackButton} from '../../../styles/layout/reuse/button/GoBackButton.style';
import BackIcon from '../../../assets/image/icon/arrow_back_white.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';

export default function GoBackButton() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const onPressGoBack = () => {
    navigation.goBack();
  };
  return (
    <BackButton onPress={onPressGoBack}>
      <BackIcon width={16} height={16} />
    </BackButton>
  );
}
