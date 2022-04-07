import React, { useState } from 'react';
import { ListContainer, WspaceList } from './styles';
import { MdAdd } from 'react-icons/md';
import { NewWorkspace } from '../Modal/NewWorkspace';

export const WorkspaceList = () => {
  const [list, setList] = useState(['모각코', 'English', '알고리즘']);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <ListContainer>
      <WspaceList>
        {list.map((item, i) => (
          <li key={i} className='wspace-item'>
            {item.slice(0, 1)}
          </li>
        ))}
      </WspaceList>
      <MdAdd onClick={toggleModal} />
      {showModal && <NewWorkspace toggleModal={toggleModal} setList={setList} />}
    </ListContainer>
  );
};
