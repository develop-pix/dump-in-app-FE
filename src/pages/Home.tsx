import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';
import NavigationBar from '../components/reuse/navigation-bar/NavigationBar';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
`;

const HomeText = styled(Text)`
  text-align: center;
`;

export default function Home() {
  return (
    <SafeContainer>
      <HomeText>Home 페이지Test2</HomeText>
      <NavigationBar />
    </SafeContainer>
  );
}
