import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserInfo } from './styles';
import { DropdownLayout } from 'components';

interface DropdownProp {
  handleClose: () => void;
}

export const UserDropdown = ({ handleClose }: DropdownProp) => {
  const navigate = useNavigate();
  const handleLogout = () => navigate('/login');

  return (
    <DropdownLayout handleClose={handleClose} style={{ top: 40, right: 10 }}>
      <UserInfo>
        <img
          src='https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze'
          alt='profile'
        />
        <div>
          <p className='user-name'>Joy</p>
          <p className='user-active'>Active</p>
        </div>
      </UserInfo>
      <li onClick={handleLogout}>로그아웃</li>
    </DropdownLayout>
  );
};
