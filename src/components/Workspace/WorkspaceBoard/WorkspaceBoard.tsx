import React, { useState } from 'react';
import { Dropdown } from './Dropdown';
import { ListContainer, WorkspaceName, ListBoard, ChannelBoard, DMBoard } from './styles';

export const WorkspaceBoard = () => {
  const [list, setList] = useState(['001 채널', '002 채널', '003 채널']);
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown((prev) => !prev);
  const addChannel = (channel: string) => {
    setList((prev) => [...prev, channel]);
  };

  return (
    <ListContainer>
      <WorkspaceName onClick={toggleDropdown}>Slack 공부방</WorkspaceName>
      {dropdown && <Dropdown handleClose={toggleDropdown} addChannel={addChannel} />}
      <ListBoard>
        <ChannelBoard>
          <p>Channels</p>
          <ul className='channel-list'>
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </ChannelBoard>
        <DMBoard>
          <p>Direct Messages</p>
          <ul className='dm-list'></ul>
        </DMBoard>
      </ListBoard>
    </ListContainer>
  );
};
