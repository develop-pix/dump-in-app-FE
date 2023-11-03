import React from 'react';
import styled from 'styled-components/native';
import NavigationBar from '../components/reuse/navigation-bar/NavigationBar';

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const HomeText = styled.Text``;

export default function Home() {
  return (
    <Container>
      <HomeText>Home 페이지</HomeText>
      <NavigationBar />
    </Container>
  );
}
