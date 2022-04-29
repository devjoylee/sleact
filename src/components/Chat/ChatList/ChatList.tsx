import React, { useRef } from 'react';
import { IDM } from 'types';
import { ChatItem } from 'components';
import { ChatListContainer } from './styles';
import { Scrollbars } from 'react-custom-scrollbars';

interface ChatListProps {
  chats: IDM[] | undefined;
}

export const ChatList = ({ chats }: ChatListProps) => {
  const scrollbarRef = useRef(null);

  return (
    <ChatListContainer>
      <Scrollbars autoHide ref={scrollbarRef}>
        {chats?.map((chat) => (
          <ChatItem key={chat.id} chatData={chat} />
        ))}
      </Scrollbars>
    </ChatListContainer>
  );
};
