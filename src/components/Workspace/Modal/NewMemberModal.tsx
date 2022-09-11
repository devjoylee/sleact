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

export const NewMemberModal = ({ closeModal }: ModalProp) => {
  const { values, handleChange, resetForm } = useForm({
    member: '',
  });
  const { member } = values;
  const { workspace } = useParams<{ workspace: string; name: string }>();

  const { mutate } = useSWR(`/api/workspaces/${workspace}/members`, fetcher);

  const inviteMember = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!member || !member.trim()) return;

    axios
      .post(
        `/api/workspaces/${workspace}/members`,
        { email: member },
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
      <form onSubmit={inviteMember}>
        <Label htmlFor='member'>
          <span>E-mail</span>
          <Input
            type='email'
            id='member'
            name='member'
            value={member}
            onChange={handleChange}
          />
        </Label>
        <Button type='submit'>Invite a new member</Button>
      </form>
    </ModalLayout>
  );
};
