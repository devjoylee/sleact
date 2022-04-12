import React, { useState } from 'react';
import { UserDropdown } from 'components';
import { WspaceHeader, UserProfile } from './styles';
import gravatar from 'gravatar';
import useSWR from 'swr';
import { fetcher } from 'utils';

export const WorkspaceHeader = () => {
  const { data } = useSWR('http://localhost:3095/api/users', fetcher);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <WspaceHeader>
      <UserProfile onClick={handleClick}>
        <img src={gravatar.url(data.nickname, { s: '28px', d: 'retro' })} alt={data.nickname} />
      </UserProfile>
      {dropdown && <UserDropdown handleClose={handleClick} />}
    </WspaceHeader>
  );
};
