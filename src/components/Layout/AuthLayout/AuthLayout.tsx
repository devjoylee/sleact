import React from 'react';
import { AuthContainer, Header } from './styles';

export const AuthLayout = ({ children }: any) => {
  return (
    <AuthContainer>
      <Header>Slack</Header>
      {children}
    </AuthContainer>
  );
};
