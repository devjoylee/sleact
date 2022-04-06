import React from 'react';
import { Input, Label, Error, Button } from './styles';
import useForm from 'hooks/useForm';
import validate from 'utils/validate';
import useValidate from 'hooks/useValidate';

export const LoginForm = () => {
  const { values, handleChange } = useForm({
    email: '',
    password: '',
  });
  const { errors, handleFormCheck } = useValidate(values, validate);
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

      <Button type='submit' onClick={handleFormCheck}>
        로그인
      </Button>
    </form>
  );
};
