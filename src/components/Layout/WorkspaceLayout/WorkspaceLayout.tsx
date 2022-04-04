import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  WorkspaceHeader,
  WorkspaceContents,
  List,
  WorkspaceName,
  WorkspaceBar,
  ChannelBar,
  Chats,
} from './styles';

export const WorkspaceLayout = () => {
  return (
    <div>
      <WorkspaceHeader>
        <img
          src='https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze'
          alt='profile'
        />
      </WorkspaceHeader>
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
