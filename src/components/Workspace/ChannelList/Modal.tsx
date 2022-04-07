import React from 'react';
import { ModalLayout } from 'components';
import { Button, Input, Label } from 'components/Auth/styles';
import useForm from 'hooks/useForm';

interface ModalProp {
  toggleModal: () => void;
}

export const Modal = ({ toggleModal }: ModalProp) => {
  const { values, handleChange, resetForm } = useForm({
    channel: '',
  });
  const { channel } = values;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetForm();
    toggleModal();
    console.log(values);
  };

  return (
    <ModalLayout handleClose={toggleModal}>
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
