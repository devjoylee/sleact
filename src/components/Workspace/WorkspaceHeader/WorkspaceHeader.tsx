import React, { useState } from 'react';
import { UserDropdown } from 'components';
import { WspaceHeader, UserProfile } from './styles';
import gravatar from 'gravatar';
import useSWR from 'swr';
import { fetcher } from 'utils';

export const WorkspaceHeader = () => {
  const { data: user } = useSWR('/api/users', fetcher);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <WspaceHeader>
      <UserProfile onClick={handleClick}>
        {user && (
          <img src={gravatar.url(user.email, { s: '28px', d: 'retro' })} alt={user.nickname} />
        )}
      </UserProfile>
      {dropdown && <UserDropdown handleClose={handleClick} />}
    </WspaceHeader>
  );
};
