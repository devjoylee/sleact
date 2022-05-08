import React, { useEffect } from 'react';
import { Input, Label, Error, Button } from './styles';
import { useForm, useValidate } from 'hooks';
import { fetcher, validate } from 'utils';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';
import { IUser } from 'types';

export const LoginForm = () => {
  const { values, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const { errors, handleFormCheck } = useValidate(values, validate);
  const { email, password } = values;

  const { data, mutate } = useSWR<IUser>('/api/users', fetcher, {
    dedupingInterval: 100000, // get data from cashe
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      axios
        .post('/api/users/login', { email, password }, { withCredentials: true })
        .then(() => {
          alert('로그인에 성공하였습니다.');
          mutate();
          resetForm();
        })
        .catch((error) => {
          console.log(error.response);
          alert(error.response.data);
        });
    }
  };

  useEffect(() => {
    if (data) navigate('/workspace/sleact/channel/일반');
  }, [data, navigate]);

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
