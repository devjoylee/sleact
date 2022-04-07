import React, { useState } from 'react';
import { Dropdown } from './Dropdown';
import { ListContainer, WorkspaceName, List } from './styles';

export const ChannelList = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown((prev) => !prev);

  return (
    <ListContainer>
      <WorkspaceName onClick={toggleDropdown}>Slack 공부방</WorkspaceName>
      {dropdown && <Dropdown handleClose={toggleDropdown} />}
      <List>Menu</List>
    </ListContainer>
  );
};
