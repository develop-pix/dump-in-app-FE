import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import GoBackButton from '../reuse/button/GoBackButton';
import {EventDetailRouteProp} from '../../interfaces/EventDetail.interface';

export default function EventDetail() {
  const route = useRoute<EventDetailRouteProp>();
  const {eventID} = route.params;

  return (
    // 해당 이벤트 ID값으로 서버에서 데이터 가져옴

    <View>
      <GoBackButton />
      <Text style={{color: 'white'}}>EventID: {eventID}</Text>
    </View>
  );
}
