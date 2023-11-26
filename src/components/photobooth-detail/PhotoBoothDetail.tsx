import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import GoBackButton from '../reuse/button/GoBackButton';
import {PhotoBoothDetailRouteProp} from '../../interfaces/PhotoBoothDetail.interface';

export default function PhotoBoothDetail() {
  const route = useRoute<PhotoBoothDetailRouteProp>();
  const {photoboothID} = route.params;

  return (
    // 해당 포토부스 ID값으로 서버에서 데이터 가져옴

    <View>
      <GoBackButton />
      <Text style={{color: 'white'}}>photoboothID: {photoboothID}</Text>
    </View>
  );
}
