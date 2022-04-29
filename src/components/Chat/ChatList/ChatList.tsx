import React from 'react';
import { IDM } from 'types';
import { ChatItem } from 'components';
import { ChatListContainer } from './styles';

interface ChatListProps {
  chats: IDM[] | undefined;
}

export const ChatList = ({ chats }: ChatListProps) => {
  return (
    <ChatListContainer>
      {chats?.map((chat) => (
        <ChatItem key={chat.id} chatData={chat} />
      ))}
    </ChatListContainer>
  );
};
