import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, SignUpPage } from 'pages';
import { Global } from '@emotion/react';
import { reset } from 'styles/reset';

const App = () => {
  return (
    <>
      <Global styles={reset} />
      <Routes>
        <Route path='/' element={<Navigate replace to='/login' />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </>
  );
};

export default App;
