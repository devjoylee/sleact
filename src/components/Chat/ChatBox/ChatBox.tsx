import React from 'react';
import { ChatBoxContainer, ChatInput, Form, SendButton, Toolbox } from './styles';
import { IoMdSend } from 'react-icons/io';
import { useParams } from 'react-router-dom';

export const ChatBox = () => {
  const handleSubmit = () => {};
  const current = useParams();

  return (
    <ChatBoxContainer>
      <Form onSubmit={handleSubmit}>
        <ChatInput>
          <textarea placeholder={`${current.name}에 메세지 보내기`} />
        </ChatInput>
        <Toolbox>
          <SendButton type='submit'>
            <IoMdSend />
          </SendButton>
        </Toolbox>
      </Form>
    </ChatBoxContainer>
  );
};

export default ChatBox;
