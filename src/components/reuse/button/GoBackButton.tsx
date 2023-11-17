import React from 'react';
import {
  BackButton,
  BackImage,
} from '../../../styles/layout/reuse/Button/GoBackButton.style';
import BackIcon from '../../../assets/image/reuse/arrow_back.png';
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
      <BackImage source={BackIcon} />
    </BackButton>
  );
}
