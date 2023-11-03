import React from 'react';
import {View, Text} from 'react-native';
import NavigationBar from '../components/reuse/navigation-bar/NavigationBar';

export default function MyPage() {
  return (
    <View style={{flex: 1}}>
      <Text>마이 페이지</Text>
      <NavigationBar />
    </View>
  );
}
