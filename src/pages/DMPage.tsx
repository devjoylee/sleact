import React, { useState } from 'react';
import { ChatBox, DMHeader } from 'components';

export const DMPage = () => {
  const [chat, setChat] = useState('');
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
  };

  return (
    <>
      <DMHeader />
      <ChatBox handleSubmit={handleSubmit} />
    </>
  );
};
