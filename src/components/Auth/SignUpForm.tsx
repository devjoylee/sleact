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
      console.log('서버로 회원가입 loading...');

      axios
        .post('/api/users', { email, nickname, password })
        .then((res) => {
          console.log(res);
          alert('회원가입에 성공하였습니다.');
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
