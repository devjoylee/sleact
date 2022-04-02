import React from 'react';
import { AuthLayout, LoginForm } from 'components';

export const LoginPage = () => {
  return (
    <AuthLayout type='login'>
      <LoginForm />
    </AuthLayout>
  );
};
