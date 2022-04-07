import React from 'react';
import { Outlet } from 'react-router-dom';
import { WorkspaceHeader, WorkspaceList, ChannelList } from 'components';
import { WorkspaceContents, Chats } from './styles';

export const WorkspaceLayout = () => {
  return (
    <div className='workspace'>
      <WorkspaceHeader />
      <WorkspaceContents>
        <WorkspaceList />
        <ChannelList />
        <Chats>
          <Outlet />
        </Chats>
      </WorkspaceContents>
    </div>
  );
};
