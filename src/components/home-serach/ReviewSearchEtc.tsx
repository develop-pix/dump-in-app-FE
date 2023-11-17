// components/ReviewSearchEtc.tsx
import React from 'react';
import {Text, View} from 'react-native';
import {ReviewSearchEtcProps} from '../../interfaces/HomeSearch.interface';

export default function ReviewSearchEtc({data}: ReviewSearchEtcProps) {
  return (
    <View style={{flexDirection: 'column'}}>
      {data.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}
