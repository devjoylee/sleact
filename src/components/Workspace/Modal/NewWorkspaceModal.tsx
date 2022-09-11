import React from 'react';
import { ModalLayout } from 'components';
import { Button, Input, Label } from 'components/Auth/styles';
import useForm from 'hooks/useForm';
import axios from 'axios';
import useSWR from 'swr';
import { fetcher } from 'utils';

interface ModalProp {
  closeModal: () => void;
}

export const NewWorkspaceModal = ({ closeModal }: ModalProp) => {
  const { values, handleChange, resetForm } = useForm({
    wsname: '',
    wsurl: '',
  });
  const { wsname, wsurl } = values;

  const { mutate } = useSWR('/api/users', fetcher);

  const createWorkspace = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!wsname || !wsname.trim()) return;
    if (!wsurl || !wsurl.trim()) return;

    axios
      .post(
        '/api/workspaces',
        {
          workspace: wsname,
          url: wsurl,
        },
        { withCredentials: true }
      )
      .then(() => {
        mutate();
        resetForm();
        closeModal();
      });
  };

  return (
    <ModalLayout handleClose={closeModal}>
      <form onSubmit={createWorkspace}>
        <Label htmlFor='wsname'>
          <span>Workspace Name</span>
          <Input
            type='text'
            id='wsname'
            name='wsname'
            value={wsname}
            onChange={handleChange}
          />
        </Label>
        <Label htmlFor='wsurl'>
          <span>Workspace url</span>
          <Input
            type='text'
            id='wsurl'
            name='wsurl'
            value={wsurl}
            onChange={handleChange}
          />
        </Label>
        <Button type='submit'>Create a new workspace</Button>
      </form>
    </ModalLayout>
  );
};
