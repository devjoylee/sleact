import React from 'react';
import { Input, Label, Error, Button } from './styles';
import useForm from 'hooks/useForm';
import validate from 'utils/validate';
import useValidate from 'hooks/useValidate';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginForm = () => {
  const { values, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  const { errors, handleFormCheck } = useValidate(values, validate);
  const { email, password } = values;
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      console.log('로그인 loading...');

      axios
        .post('/api/users/login', { email, password })
        .then((res) => {
          console.log(res);
          alert('로그인에 성공하였습니다.');
          resetForm();
          navigate('/workspace');
        })
        .catch((error) => {
          console.log(error.response);
          alert(error.response.data);
        });
    }
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
