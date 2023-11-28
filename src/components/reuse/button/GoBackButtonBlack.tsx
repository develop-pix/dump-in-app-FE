import React from 'react';
import {
  BackButton,
  BackImage,
} from '../../../styles/layout/reuse/button/GoBackButton.style';
import BackBlackIcon from '../../../assets/image/reuse/arrow_back_black.png';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';

export default function GoBackButtonBlack() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const onPressGoBack = () => {
    navigation.goBack();
  };
  return (
    <BackButton onPress={onPressGoBack}>
      <BackImage source={BackBlackIcon} />
    </BackButton>
  );
}
