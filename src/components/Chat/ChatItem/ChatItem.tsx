import React from 'react';
import { IDM } from 'types';
import { ChatItemContainer, ChatProfile, ChatContent } from './styles';
import gravatar from 'gravatar';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

interface ChatListProps {
  chatData: IDM;
}

export const ChatItem = ({ chatData }: ChatListProps) => {
  const { createdAt, content, Sender } = chatData;

  return (
    <ChatItemContainer>
      <ChatProfile>
        <img src={gravatar.url(Sender.email, { s: '36px', d: 'retro' })} alt={Sender.nickname} />
      </ChatProfile>
      <ChatContent>
        <p className='user-data'>
          <b className='name'>{Sender.nickname}</b>
          <span className='date'>{dayjs(createdAt).format('A h:mm')}</span>
        </p>
        <p className='text'>{content}</p>
      </ChatContent>
    </ChatItemContainer>
  );
};
