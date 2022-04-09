import React, { useState } from 'react';
import { ChannelList } from './ChannelList';
import { DMList } from './DMList';
import { Dropdown } from './Dropdown';
import { BoardContainer, WorkspaceName, ListBoard } from './styles';

export const WorkspaceBoard = () => {
  const [list, setList] = useState(['001 채널', '002 채널', '003 채널']);
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown((prev) => !prev);
  const addChannel = (channel: string) => {
    setList((prev) => [...prev, channel]);
  };

  return (
    <BoardContainer>
      <WorkspaceName onClick={toggleDropdown}>Slack 공부방</WorkspaceName>
      {dropdown && <Dropdown handleClose={toggleDropdown} addChannel={addChannel} />}
      <ListBoard>
        <ChannelList list={list} />
        <DMList list={list} />
      </ListBoard>
    </BoardContainer>
  );
};
