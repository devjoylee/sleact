import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContainer, Header, LinkContainer } from './styles';

interface AuthLayoutProps {
  type: string;
  children: React.ReactNode;
}

export const AuthLayout = ({ type, children }: AuthLayoutProps) => {
  return (
    <AuthContainer className={`${type}_page`}>
      <Header>Sleact</Header>
      {children}
      {type === 'login' && (
        <LinkContainer>
          Don't have an account?&nbsp;
          <Link to='/signup'>Sign up here!</Link>
          {/* 아직 회원이 아니신가요?&nbsp;
          <Link to='/signup'>회원가입 하러가기</Link> */}
        </LinkContainer>
      )}

      {type === 'signup' && (
        <LinkContainer>
          Already have an account?&nbsp;
          <Link to='/login'>Login here!</Link>
          {/* 이미 회원이신가요?&nbsp;
          <Link to='/login'>로그인 하러가기</Link> */}
        </LinkContainer>
      )}
    </AuthContainer>
  );
};
