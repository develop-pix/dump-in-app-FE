import React from 'react';
import styled from 'styled-components/native';
import NavigationBar from '../components/reuse/navigation-bar/NavigationBar';

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const CategoryText = styled.Text``;

export default function Category() {
  return (
    <Container>
      <CategoryText>Category 페이지</CategoryText>
      <NavigationBar />
    </Container>
  );
}
