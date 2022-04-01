import React from 'react';
import { AuthLayout } from 'components';
import { Link } from 'react-router-dom';
import {
  Form,
  Error,
  Label,
  Input,
  LinkContainer,
  Button,
} from 'components/Layout/AuthLayout/styles';

export const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit}>
        <Label id='email-label'>
          <span>이메일 주소</span>
          <div>
            <Input type='email' id='email' name='email' />
          </div>
        </Label>
        <Label id='password-label'>
          <span>비밀번호</span>
          <div>
            <Input type='password' id='password' name='password' />
          </div>
          <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>
        </Label>
        <Button type='submit'>로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to='/signup'>회원가입 하러가기</Link>
      </LinkContainer>
    </AuthLayout>
  );
};
