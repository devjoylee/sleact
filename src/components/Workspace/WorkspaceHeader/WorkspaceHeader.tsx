import React, { useState } from 'react';
import { UserDropdown } from 'components';
import { WspaceHeader, UserProfile } from './styles';

export const WorkspaceHeader = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <WspaceHeader>
      <UserProfile onClick={handleClick}>
        <img
          src='https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze'
          alt='profile'
        />
      </UserProfile>
      {dropdown && <UserDropdown handleClose={handleClick} />}
    </WspaceHeader>
  );
};
