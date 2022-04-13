import React from 'react';
import { ModalLayout } from 'components';
import { Button, Input, Label } from 'components/Auth/styles';
import useForm from 'hooks/useForm';
import axios from 'axios';

interface ModalProp {
  toggleModal: () => void;
}

export const Modal = ({ toggleModal }: ModalProp) => {
  const { values, handleChange, resetForm } = useForm({
    wsname: '',
    wsurl: '',
  });
  const { wsname, wsurl } = values;

  const createWorkspace = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!wsname || !wsname.trim()) return;
    if (!wsurl || !wsurl.trim()) return;

    axios
      .post(
        'http://localhost:3095/api/workspaces',
        {
          workspace: wsname,
          url: wsurl,
        },
        { withCredentials: true }
      )
      .then(() => {
        toggleModal();
        resetForm();
        console.log(values);
      });
  };

  return (
    <ModalLayout handleClose={toggleModal}>
      <form onSubmit={createWorkspace}>
        <Label htmlFor='wsname'>
          <span>워크스페이스 이름</span>
          <Input type='text' id='wsname' name='wsname' value={wsname} onChange={handleChange} />
        </Label>
        <Label htmlFor='wsurl'>
          <span>워크스페이스 url</span>
          <Input type='text' id='wsurl' name='wsurl' value={wsurl} onChange={handleChange} />
        </Label>
        <Button type='submit'>생성하기</Button>
      </form>
    </ModalLayout>
  );
};
