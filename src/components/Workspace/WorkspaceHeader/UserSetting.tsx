import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOutButton, UserSettingContainer, UserInfo } from './styles';
import { MdClose } from 'react-icons/md';

interface UserSettingProp {
  handleClose: () => void;
}

export const UserSetting = ({ handleClose }: UserSettingProp) => {
  const navigate = useNavigate();
  const handleLogout = () => navigate('/login');

  return (
    <UserSettingContainer>
      <UserInfo>
        <img
          src='https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze'
          alt='profile'
        />
        <ul>
          <li className='user-name'>Joy</li>
          <li className='user-active'>Active</li>
        </ul>
        <MdClose onClick={handleClose} />
      </UserInfo>
      <LogOutButton onClick={handleLogout}>로그아웃</LogOutButton>
    </UserSettingContainer>
  );
};
