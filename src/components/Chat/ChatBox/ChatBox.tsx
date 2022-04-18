import React, { useRef, useState } from 'react';
import {
  ChatBoxContainer,
  ChatTextArea,
  Form,
  ButtonContainer,
  SendButton,
  Toolbox,
} from './styles';
import { IoMdSend } from 'react-icons/io';
import { GoChevronDown } from 'react-icons/go';
import { useParams } from 'react-router-dom';
import { STYLE } from 'styles/variables';

interface ChatBoxProps {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>
  ) => void;
}

export const ChatBox = ({ handleSubmit }: ChatBoxProps) => {
  const [chat, setChat] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { name } = useParams();

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
          placeholder={`${name}에 메세지 보내기`}
          ref={textAreaRef}
        />
        <Toolbox>
          <ButtonContainer className={chat ? 'active' : ''}>
            <SendButton type='submit' className='send-now'>
              <IoMdSend />
            </SendButton>
            <SendButton className='send-later'>
              <GoChevronDown />
            </SendButton>
          </ButtonContainer>
        </Toolbox>
      </Form>
    </ChatBoxContainer>
  );
};

export default ChatBox;
