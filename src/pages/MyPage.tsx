import React from 'react';
import MyPageForm from '../components/my-page/MyPageForm';
import {MyPageSafeContainer} from '../styles/layout/MyPage';

export default function Category() {
  return (
    <MyPageSafeContainer>
      <MyPageForm />
    </MyPageSafeContainer>
  );
}
