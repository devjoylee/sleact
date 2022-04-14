import React, { useState } from 'react';
import { ListContainer, WspaceList } from './styles';
import { MdAdd } from 'react-icons/md';
import { NewWorkspaceModal } from 'components';
import useSWR from 'swr';
import { fetcher } from 'utils';
import { IUser } from 'types';

export const WorkspaceList = () => {
  const [newWorkspace, setNewWorkspace] = useState(false);
  const { data: userData } = useSWR<IUser>('/api/users', fetcher);

  const toggleModal = () => setNewWorkspace((prev) => !prev);

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
      {newWorkspace && <NewWorkspaceModal closeModal={toggleModal} />}
    </ListContainer>
  );
};
