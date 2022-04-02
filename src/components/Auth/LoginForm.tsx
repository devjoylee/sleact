import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Label, Error, Button, LinkContainer } from './styles';
import useForm from 'hooks/useForm';

export const LoginForm = () => {
  const { values, handleChange, handleSubmit } = useForm({
    email: '',
    password: '',
  });

  const { email, password } = values;

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor='email'>
        <span>이메일 주소</span>
        <Input type='email' id='email' name='email' value={email} onChange={handleChange} />
      </Label>
      <Label htmlFor='password'>
        <span>비밀번호</span>
        <Input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>
      </Label>
      <Button type='submit'>로그인</Button>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to='/signup'>회원가입 하러가기</Link>
      </LinkContainer>
    </Form>
  );
};
