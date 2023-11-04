import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';
import NavigationBar from '../components/reuse/navigation-bar/NavigationBar';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
`;

const CategoryText = styled(Text)`
  text-align: center;
`;

export default function Category() {
  return (
    <SafeContainer>
      <CategoryText>Category 페이지</CategoryText>
      <NavigationBar />
    </SafeContainer>
  );
}
