import React from 'react';
import {View, Text} from 'react-native';
import NavigationBar from '../components/reuse/navigation-bar/NavigationBar';

export default function Location() {
  return (
    <View style={{flex: 1}}>
      <Text>지도 페이지</Text>
      <NavigationBar />
    </View>
  );
}
