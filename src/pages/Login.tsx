import React from 'react';
import LoginForm from '../components/login/LoginForm';
import {LoginSafeContainer} from '../styles/layout/Login.style';

export default function Login() {
  return (
    <LoginSafeContainer>
      <LoginForm />
    </LoginSafeContainer>
  );
}
