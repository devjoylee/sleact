import React, { useState } from 'react';
import { ListContainer, WspaceList } from './styles';
import { MdAdd } from 'react-icons/md';
import { Modal } from './Modal';
import useSWR from 'swr';
import { fetcher } from 'utils';
import { IUser } from 'types';

export const WorkspaceList = () => {
  const [showModal, setShowModal] = useState(false);
  const { data: userData } = useSWR<IUser>('http://localhost:3095/api/users', fetcher);

  const toggleModal = () => setShowModal((prev) => !prev);
  // console.log(userData);

  return (
    <ListContainer>
      <WspaceList>
        {userData?.Workspaces?.map((workspace, i) => (
          <li key={i} className='wspace-item'>
            {workspace.name.slice(0, 1).toUpperCase()}
          </li>
        ))}
      </WspaceList>
      <MdAdd onClick={toggleModal} />
      {showModal && <Modal toggleModal={toggleModal} />}
    </ListContainer>
  );
};
