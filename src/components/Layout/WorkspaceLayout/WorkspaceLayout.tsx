import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { WorkspaceHeader, WorkspaceList, WorkspaceBoard } from 'components';
import { WorkspaceContents, Chats } from './styles';
import useSWR from 'swr';
import { fetcher } from 'utils';

export const WorkspaceLayout = () => {
  const { data } = useSWR('http://localhost:3095/api/users', fetcher);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) navigate('/login');
  }, [data, navigate]);

  return (
    <div className='workspace'>
      <WorkspaceHeader />
      <WorkspaceContents>
        <WorkspaceList />
        <WorkspaceBoard />
        <Chats>
          <Outlet />
        </Chats>
      </WorkspaceContents>
    </div>
  );
};
