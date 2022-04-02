import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Label, Error, Button, LinkContainer } from './styles';
import useForm from 'hooks/useForm';

export const SignUpForm = () => {
  const { values, handleChange, handleSubmit } = useForm({
    email: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });

  const { email, nickname, password, passwordCheck } = values;

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor='email'>
        <span>이메일 주소</span>
        <Input type='email' id='email' name='email' value={email} onChange={handleChange} />
      </Label>
      <Label htmlFor='nickname'>
        <span>닉네임</span>
        <Input
          type='text'
          id='nickname'
          name='nickname'
          value={nickname}
          onChange={handleChange}
        />
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
      </Label>
      <Label htmlFor='passwordCheck'>
        <span>비밀번호 확인</span>
        <Input
          type='password'
          id='passwordCheck'
          name='passwordCheck'
          value={passwordCheck}
          onChange={handleChange}
        />
      </Label>
      <Button type='submit'>회원가입</Button>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <Link to='/login'>로그인 하러가기</Link>
      </LinkContainer>
    </Form>
  );
};
