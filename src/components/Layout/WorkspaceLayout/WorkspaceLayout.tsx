import React, { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { WorkspaceHeader, WorkspaceList, WorkspaceBoard } from 'components';
import { WorkspaceContents, Chats } from './styles';
import useSWR from 'swr';
import { fetcher } from 'utils';
import { useSocket } from 'hooks';
import { IChannel, IUser } from 'types';

export const WorkspaceLayout = () => {
  const { workspace } = useParams<{ workspace: string }>();
  const [socket, disconnect] = useSocket(workspace);
  const navigate = useNavigate();

  const { data: userData } = useSWR<IUser | false>('/api/users', fetcher, {
    dedupingInterval: 2000, // 2초
  });
  const { data: channelData } = useSWR<IChannel[]>(
    `/api/workspaces/${workspace}/channels`,
    fetcher
  );

  // 소켓 연결
  useEffect(() => {
    if (channelData && userData && socket) {
      console.log(socket);
      socket.emit('login', { id: userData.id, channels: channelData.map((v) => v.id) });
    }
  }, [socket, channelData, userData]);

  // 소켓 연결 해제 (workspace가 바뀔 때)
  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [workspace, disconnect]);

  useEffect(() => {
    if (!userData) navigate('/login');
  }, [userData, navigate]);

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
