import React from 'react';
import { ModalLayout } from 'components';
import { Button, Input, Label } from 'components/Auth/styles';
import useForm from 'hooks/useForm';

interface ModalProp {
  closeModal: () => void;
  addChannel: (channel: string) => void;
}

export const Modal = ({ closeModal, addChannel }: ModalProp) => {
  const { values, handleChange, resetForm } = useForm({
    channel: '',
  });
  const { channel } = values;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addChannel(channel);
    resetForm();
    closeModal();
    console.log(values);
  };

  return (
    <ModalLayout handleClose={closeModal}>
      <form onSubmit={handleSubmit}>
        <Label htmlFor='channel'>
          <span>채널명</span>
          <Input type='text' id='channel' name='channel' value={channel} onChange={handleChange} />
        </Label>
        <Button type='submit'>생성하기</Button>
      </form>
    </ModalLayout>
  );
};
