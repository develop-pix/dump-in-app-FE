import {Text} from 'react-native';
import React from 'react';
import NavigationBar from '../reuse/navigation-bar/NavigationBar';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ReviewDetailParamList} from '../../interfaces/NavigationBar';

export default function ReviewDetailForm() {
  const route = useRoute<RouteProp<ReviewDetailParamList, 'reviewType'>>();
  return (
    <>
      <Text style={{color: 'white'}}>
        ReviewDetail - 리뷰ID: {route.params.reviewID}
      </Text>
      <NavigationBar />
    </>
  );
}
