import React, { useEffect } from 'react';
import { Input, Label, Error, Button } from './styles';
import { useForm, useValidate } from 'hooks';
import { fetcher, validate } from 'utils';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';

export const SignUpForm = () => {
  const { values, handleChange, resetForm } = useForm({
    email: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });

  const { errors, handleFormCheck } = useValidate(values, validate, 'signup');
  const { email, nickname, password, passwordCheck } = values;

  const { data } = useSWR('/api/users', fetcher);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      console.log('Request Sign-up loading...');

      axios
        .post('/api/users', { email, nickname, password })
        .then((res) => {
          console.log(res);
          alert('You have successfully signed up.');
          resetForm();
          navigate('/login');
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
        <span>E-mail</span>
        <Input
          type='text'
          id='email'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor='nickname'>
        <span>Nickname</span>
        <Input
          type='text'
          id='nickname'
          name='nickname'
          value={nickname}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor='password'>
        <span>Password</span>
        <Input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor='passwordCheck'>
        <span>Confirm Password</span>
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
        Sign Up
      </Button>
    </form>
  );
};
