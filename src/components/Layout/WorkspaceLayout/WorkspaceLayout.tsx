import React from 'react';
import { Outlet } from 'react-router-dom';
import { WspaceHeader } from 'components';
import { WorkspaceContents, List, WorkspaceName, WorkspaceBar, ChannelBar, Chats } from './styles';

export const WorkspaceLayout = () => {
  return (
    <div className='workspace'>
      <WspaceHeader />
      <WorkspaceContents>
        <WorkspaceBar>Test</WorkspaceBar>
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
