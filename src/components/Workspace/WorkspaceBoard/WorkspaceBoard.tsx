import React, { useState } from 'react';
import { ChannelList } from './ChannelList';
import { DMList } from './DMList';
import { Dropdown } from './Dropdown';
import { BoardContainer, WorkspaceName, ListBoard } from './styles';

export const WorkspaceBoard = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown((prev) => !prev);

  return (
    <BoardContainer>
      <WorkspaceName onClick={toggleDropdown}>Slack 공부방</WorkspaceName>
      {dropdown && <Dropdown handleClose={toggleDropdown} />}
      <ListBoard>
        <ChannelList />
        <DMList />
      </ListBoard>
    </BoardContainer>
  );
};
