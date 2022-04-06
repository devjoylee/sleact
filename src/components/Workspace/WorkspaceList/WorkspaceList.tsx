import React, { useState } from 'react';
import { ListContainer, WspaceList } from './styles';
import { MdAdd } from 'react-icons/md';
import Modal from '../Modal/Modal';
import { Button, Input, Label } from 'components/Auth/styles';
import useForm from 'hooks/useForm';

export const WorkspaceList = () => {
  const [showModal, setShowModal] = useState(false);
  // const { values } = useForm({
  //   wsname: '',
  //   wsurl: '',
  // });

  const handleModalClose = () => {
    setShowModal(false);
  };
  const handleAddItem = () => {
    setShowModal(true);
  };

  return (
    <ListContainer>
      <WspaceList>
        {['모각코', 'English', '알고리즘'].map((item, i) => (
          <li key={i} className='wspace-item'>
            {item.slice(0, 1)}
          </li>
        ))}
      </WspaceList>
      <MdAdd onClick={handleAddItem} />
      {showModal && (
        <Modal handleClose={handleModalClose}>
          <form>
            <Label htmlFor='wsname'>
              <span>워크스페이스 이름</span>
              <Input type='text' id='wsname' name='wsname' />
            </Label>
            <Label htmlFor='wsurl'>
              <span>워크스페이스 url</span>
              <Input type='text' id='wsurl' name='wsurl' />
            </Label>
            <Button type='submit'>생성하기</Button>
          </form>
        </Modal>
      )}
    </ListContainer>
  );
};
