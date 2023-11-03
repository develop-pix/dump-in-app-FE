import React from 'react';
import styled from 'styled-components/native';
import NavigationBar from '../components/reuse/navigation-bar/NavigationBar';

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const LocationText = styled.Text``;

export default function Location() {
  return (
    <Container>
      <LocationText>Location 페이지</LocationText>
      <NavigationBar />
    </Container>
  );
}
