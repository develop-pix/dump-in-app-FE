import {Text} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {NewReviewParamList} from '../interfaces/NavigationBar';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Reviewnew() {
  //route 확인용 임시코드
  const route = useRoute<RouteProp<NewReviewParamList, 'branchType'>>();
  return (
    <SafeAreaView>
      <Text>현재 경로 BranchID :{route.params.branchID}</Text>
    </SafeAreaView>
  );
}
