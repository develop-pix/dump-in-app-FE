import React from 'react';
import {
  BackButton,
  BackImage,
} from '../../../styles/layout/reuse/button/GoBackButton.style';
import BackIcon from '../../../assets/image/reuse/arrow_back.png';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';
import {useAppDispatch} from '../../../hooks/redux/store';
import {
  setBranchID,
  setCameraShot,
  setDate,
  setDescription,
  setFrameColor,
  setHairIron,
  setHashtag,
  setParty,
  setPublicOpen,
  setRepresentativeImage,
  setTools,
} from '../../../hooks/redux/ReviewData';

export default function GoBackButtonReview() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const dispatch = useAppDispatch();

  // BackButton 클릭시 redux 내용 초기화
  const onPressGoHome = () => {
    dispatch(setRepresentativeImage(null));
    dispatch(setDescription(null));
    dispatch(setBranchID(null));
    dispatch(setDate(null));
    dispatch(setFrameColor(null));
    dispatch(setParty(null));
    dispatch(setCameraShot(null));
    dispatch(setHashtag([]));
    dispatch(setTools(null));
    dispatch(setHairIron(null));
    dispatch(setPublicOpen(true));
    //navigate,poptoTop: 하단바 문제,  goBack, pop 브랜치 설정 했을때 2번 되돌아가야되는 문제 해결해야함
    navigation.pop();
  };
  return (
    <BackButton onPress={onPressGoHome}>
      <BackImage source={BackIcon} />
    </BackButton>
  );
}
