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
import { STYLE } from 'styles/variables';
import axios from 'axios';
import useSWR from 'swr';
import { IChat, IDM } from 'types';
import { fetcher } from 'utils';

interface ChatBoxProps {
  url: string;
  name: string | undefined;
}

export const ChatBox = ({ url, name }: ChatBoxProps) => {
  const [chat, setChat] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { mutate } = useSWR<IDM[] | IChat[]>(`${url}?perPage=20&page=1`, fetcher);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();

    // 서버에 채팅 text 보내기
    if (chat?.trim()) {
      axios
        .post(url, {
          content: chat,
        })
        .then(() => {
          setChat('');
          mutate();
        })
        .catch(console.error);
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        handleSubmit(e);
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
