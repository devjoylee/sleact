import React from 'react';
import { ModalLayout } from 'components';
import { Button, Input, Label } from 'components/Auth/styles';
import { useParams } from 'react-router-dom';
import useForm from 'hooks/useForm';
import axios from 'axios';
import useSWR from 'swr';
import { fetcher } from 'utils';

interface ModalProp {
  closeModal: () => void;
}

export const NewChannelModal = ({ closeModal }: ModalProp) => {
  const { values, handleChange, resetForm } = useForm({
    channel: '',
  });
  const { channel } = values;
  const { workspace } = useParams<{ workspace: string; name: string }>();

  const { mutate } = useSWR(`/api/workspaces/${workspace}/channels`, fetcher);

  const createChannel = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post(
        `/api/workspaces/${workspace}/channels`,
        { name: channel },
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
      <form onSubmit={createChannel}>
        <Label htmlFor='channel'>
          <span>Channel Name</span>
          <Input
            type='text'
            id='channel'
            name='channel'
            value={channel}
            onChange={handleChange}
          />
        </Label>
        <Button type='submit'>Create a channel</Button>
      </form>
    </ModalLayout>
  );
};
