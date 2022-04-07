import React from 'react';
import { Outlet } from 'react-router-dom';
import { WorkspaceHeader, WorkspaceList, WorkspaceBoard } from 'components';
import { WorkspaceContents, Chats } from './styles';

export const WorkspaceLayout = () => {
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
