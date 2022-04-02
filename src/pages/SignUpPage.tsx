import React from 'react';
import { AuthLayout, SignUpForm } from 'components';

export const SignUpPage = () => {
  return (
    <AuthLayout type='signup'>
      <SignUpForm />
    </AuthLayout>
  );
};
