import React, { Dispatch, SetStateAction } from 'react';
import { ModalLayout } from 'components';
import { Button, Input, Label } from 'components/Auth/styles';
import useForm from 'hooks/useForm';

interface ModalProp {
  toggleModal: () => void;
  setList: Dispatch<SetStateAction<string[]>>;
}

export const Modal = ({ toggleModal, setList }: ModalProp) => {
  const { values, handleChange, resetForm } = useForm({
    wsname: '',
    wsurl: '',
  });
  const { wsname, wsurl } = values;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setList((prev) => [...prev, wsname]);
    resetForm();
    toggleModal();
    console.log(values);
  };

  return (
    <ModalLayout handleClose={toggleModal}>
      <form onSubmit={handleSubmit}>
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
