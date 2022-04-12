import React, { useState } from 'react';
import { DropdownLayout } from 'components';
import { Modal } from './Modal';
import useSWR from 'swr';
import { fetcher } from 'utils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface DropdownProp {
  handleClose: () => void;
  addChannel: (channel: string) => void;
}

export const Dropdown = ({ handleClose, addChannel }: DropdownProp) => {
  const { mutate } = useSWR('http://localhost:3095/api/users', fetcher);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

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
    <>
      <DropdownLayout handleClose={handleClose} style={{ top: 55, left: 10 }}>
        <li onClick={toggleModal}>채널 만들기</li>
        <li onClick={handleLogout}>로그아웃</li>
        {showModal && <Modal closeModal={toggleModal} addChannel={addChannel} />}
      </DropdownLayout>
    </>
  );
};
