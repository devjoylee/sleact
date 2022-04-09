import React, { useState } from 'react';
import { ChannelList } from './ChannelList';
import { DMList } from './DMList';
import { Dropdown } from './Dropdown';
import { BoardContainer, WorkspaceName, ListBoard } from './styles';

export const WorkspaceBoard = () => {
  const [channels, setChannels] = useState(['일반', '새채널', '테스트채널']);
  const [dm, setDM] = useState(['일반', '새채널', '테스트채널']);
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown((prev) => !prev);
  const addChannel = (channel: string) => {
    setChannels((prev) => [...prev, channel]);
  };

  return (
    <BoardContainer>
      <WorkspaceName onClick={toggleDropdown}>Slack 공부방</WorkspaceName>
      {dropdown && <Dropdown handleClose={toggleDropdown} addChannel={addChannel} />}
      <ListBoard>
        <ChannelList channels={channels} />
        <DMList />
      </ListBoard>
    </BoardContainer>
  );
};
