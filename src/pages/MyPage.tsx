import React from 'react';
import styled from 'styled-components/native';
import NavigationBar from '../components/reuse/navigation-bar/NavigationBar';

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const MyPageText = styled.Text``;

export default function MyPage() {
  return (
    <Container>
      <MyPageText>MyPage 페이지</MyPageText>
      <NavigationBar />
    </Container>
  );
}
