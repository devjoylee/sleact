import React from 'react';
import { Input, Label, Error, Button } from './styles';
import useForm from 'hooks/useForm';
import validate from 'utils/validate';
import useValidate from 'hooks/useValidate';

export const SignUpForm = () => {
  const { values, handleChange, resetForm } = useForm({
    email: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });

  const { errors, handleFormCheck } = useValidate(values, validate, 'signup');
  const { email, nickname, password, passwordCheck } = values;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetForm();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor='email'>
        <span>이메일 주소</span>
        <Input type='text' id='email' name='email' value={email} onChange={handleChange} />
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

      {Object.keys(errors).map((error, i) => (
        <Error key={i}>{errors[error]}</Error>
      ))}

      <Button type='submit' onClick={handleFormCheck}>
        회원가입
      </Button>
    </form>
  );
};
