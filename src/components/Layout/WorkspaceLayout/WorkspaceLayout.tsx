import React from 'react';
import { Outlet } from 'react-router-dom';
import { WorkspaceHeader, WorkspaceList } from 'components';
import { WorkspaceContents, List, WorkspaceName, ChannelBar, Chats } from './styles';

export const WorkspaceLayout = () => {
  return (
    <div className='workspace'>
      <WorkspaceHeader />
      <WorkspaceContents>
        <WorkspaceList />
        <ChannelBar>
          <WorkspaceName>Slack 공부방</WorkspaceName>
          <List>Menu</List>
        </ChannelBar>
        <Chats>
          <Outlet />
        </Chats>
      </WorkspaceContents>
    </div>
  );
};
