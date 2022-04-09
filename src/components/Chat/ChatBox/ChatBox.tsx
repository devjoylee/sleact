import React, { useRef, useState } from 'react';
import { ChatBoxContainer, ChatTextArea, Form, SendButton, Toolbox } from './styles';
import { IoMdSend } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import { STYLE } from 'styles/variables';

export const ChatBox = () => {
  const [chat, setChat] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const current = useParams();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    console.log('submit', chat);
  };
  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        handleSubmit(e);
        setChat('');
        if (textAreaRef.current) {
          textAreaRef.current.style.height = `${STYLE.CHAT_INPUT_HEIGHT}`;
        }
      }
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChat(e.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = `${STYLE.CHAT_INPUT_HEIGHT}`;
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  };

  return (
    <ChatBoxContainer>
      <Form onSubmit={handleSubmit}>
        <ChatTextArea
          value={chat}
          onKeyDown={handleEnter}
          onChange={handleChange}
          placeholder={`${current.name}에 메세지 보내기`}
          ref={textAreaRef}
        />
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
