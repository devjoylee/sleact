import { ChannelHeader, ChatBox } from 'components';
import React, { useState } from 'react';

export const ChannelPage = () => {
  const [chat, setChat] = useState('');
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
  };

  return (
    <>
      <ChannelHeader />
      <ChatBox handleSubmit={handleSubmit} />
    </>
  );
};
