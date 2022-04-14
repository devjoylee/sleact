import React, { useState } from 'react';
import { DropdownLayout, NewChannelModal, NewMemberModal } from 'components';
import useSWR from 'swr';
import { fetcher } from 'utils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface DropdownProp {
  handleClose: () => void;
}

export const Dropdown = ({ handleClose }: DropdownProp) => {
  const { mutate } = useSWR('/api/users', fetcher);
  const [newMember, setNewMember] = useState(false);
  const [newChannel, setNewChannel] = useState(false);

  const navigate = useNavigate();

  const handleNewMemberModal = () => setNewMember((prev) => !prev);
  const handleNewChannelModal = () => setNewChannel((prev) => !prev);

  const handleLogout = () => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false, false);
        navigate('/login');
      });
  };

  return (
    <>
      <DropdownLayout handleClose={handleClose} style={{ top: 55, left: 10 }}>
        <li onClick={handleNewChannelModal}>채널 만들기</li>
        <li onClick={handleNewMemberModal}>워크스페이스에 사용자 초대</li>
        <li onClick={handleLogout}>로그아웃</li>
        {newMember && <NewMemberModal closeModal={handleNewMemberModal} />}
        {newChannel && <NewChannelModal closeModal={handleNewChannelModal} />}
      </DropdownLayout>
    </>
  );
};
