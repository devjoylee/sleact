import React from 'react';
import { ListContainer, WspaceList } from './styles';
import { MdAdd } from 'react-icons/md';

export const WorkspaceList = () => {
  return (
    <ListContainer>
      <WspaceList>
        {['모각코', 'English', '알고리즘'].map((item, i) => (
          <li key={i} className='wspace-item'>
            {item.slice(0, 1)}
          </li>
        ))}
      </WspaceList>
      <MdAdd />
    </ListContainer>
  );
};
