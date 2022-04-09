import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';
import { reset } from 'styles/reset';
import { WorkspaceLayout } from 'components';
import { LoginPage, SignUpPage, ChannelPage, DMPage } from 'pages';

const App = () => {
  return (
    <>
      <Global styles={reset} />
      <Routes>
        <Route path='/' element={<Navigate replace to='/login' />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/workspace' element={<WorkspaceLayout />}>
          <Route path='channel/:name' element={<ChannelPage />} />
          <Route path='dm/:name' element={<DMPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
