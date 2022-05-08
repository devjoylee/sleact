import React, { useState } from 'react';
import { ChannelList } from './ChannelList';
import { DMList } from './DMList';
import { Dropdown } from './Dropdown';
import { BoardContainer, WorkspaceName, ListBoard } from './styles';
import useSWR from 'swr';
import { fetcher } from 'utils';
import { IUser } from 'types';
import { useParams } from 'react-router-dom';

export const WorkspaceBoard = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown((prev) => !prev);

  const { workspace } = useParams();
  const { data: userData } = useSWR<IUser>('/api/users', fetcher);

  const currentWs = userData?.Workspaces.filter((ws) => ws.url === workspace);

  return (
    <BoardContainer>
      <WorkspaceName onClick={toggleDropdown}>{currentWs && currentWs[0].name}</WorkspaceName>
      {dropdown && <Dropdown handleClose={toggleDropdown} />}
      <ListBoard>
        <ChannelList />
        <DMList />
      </ListBoard>
    </BoardContainer>
  );
};
