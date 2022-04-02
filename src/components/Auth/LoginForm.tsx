import React from 'react';
import { Input, Label, Error, Button } from './styles';
import useForm from 'hooks/useForm';

export const LoginForm = () => {
  const { values, errors, handleChange, handleClick } = useForm({
    email: '',
    password: '',
  });

  const { email, password } = values;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor='email'>
        <span>이메일 주소</span>
        <Input type='text' id='email' name='email' value={email} onChange={handleChange} />
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

      {Object.keys(errors).map((error, i) => (
        <Error key={i}>{errors[error]}</Error>
      ))}

      <Button type='submit' onClick={handleClick}>
        로그인
      </Button>
    </form>
  );
};
