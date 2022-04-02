import React from 'react';
import { AuthLayout } from 'components';
import { Link } from 'react-router-dom';
import { Form, Input, Label, Error, Button, LinkContainer } from './styles';

export const SignUpForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit}>
        <Label id='email-label'>
          <span>이메일 주소</span>
          <Input type='email' id='email' name='email' />
        </Label>
        <Label id='nickname-label'>
          <span>닉네임</span>
          <Input type='text' id='nickname' name='nickname' />
        </Label>
        <Label id='password-label'>
          <span>비밀번호</span>
          <Input type='password' id='password' name='password' />
        </Label>
        <Label id='password-check-label'>
          <span>비밀번호 확인</span>
          <Input type='password' id='password-check' name='password-check' />
        </Label>
        <Button type='submit'>회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <Link to='/login'>로그인 하러가기</Link>
      </LinkContainer>
    </AuthLayout>
  );
};
