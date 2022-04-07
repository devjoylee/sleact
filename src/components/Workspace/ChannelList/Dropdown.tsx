import React, { useState } from 'react';
import { DropdownLayout } from 'components';
import { Modal } from './Modal';

interface DropdownProp {
  handleClose: () => void;
}

export const Dropdown = ({ handleClose }: DropdownProp) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <DropdownLayout handleClose={handleClose} style={{ top: 55, left: 10 }}>
        <li onClick={toggleModal}>채널 만들기</li>
        <li>로그아웃</li>
        {showModal && <Modal toggleModal={toggleModal} />}
      </DropdownLayout>
    </>
  );
};
