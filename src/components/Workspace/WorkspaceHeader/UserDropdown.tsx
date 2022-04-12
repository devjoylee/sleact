import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserInfo } from './styles';
import { DropdownLayout } from 'components';
import useSWR from 'swr';
import { fetcher } from 'utils';
import axios from 'axios';

interface DropdownProp {
  handleClose: () => void;
}

export const UserDropdown = ({ handleClose }: DropdownProp) => {
  const { data, mutate } = useSWR('http://localhost:3095/api/users', fetcher);

  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false, false);
        navigate('/login');
      });
  };

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
