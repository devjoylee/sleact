import React, { useState } from 'react';
import { UserSetting } from 'components';
import { WorkspaceHeader, UserProfile } from './styles';

export const WspaceHeader = () => {
  const [showUserSetting, setShowUserSetting] = useState(false);
  const handleClick = () => {
    setShowUserSetting((prev) => !prev);
  };

  return (
    <WorkspaceHeader>
      <UserProfile onClick={handleClick}>
        <img
          src='https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze'
          alt='profile'
        />
      </UserProfile>
      {showUserSetting && <UserSetting handleClose={handleClick} />}
    </WorkspaceHeader>
  );
};
