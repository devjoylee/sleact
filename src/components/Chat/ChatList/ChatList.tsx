import React, { useRef } from 'react';
import { IDM } from 'types';
import { ChatItem } from 'components';
import { ChatListContainer, DateSection } from './styles';
import { Scrollbars } from 'react-custom-scrollbars';
import { makeDateSection } from 'utils';

interface ChatListProps {
  chats: IDM[] | undefined;
}

export const ChatList = ({ chats }: ChatListProps) => {
  const scrollbarRef = useRef(null);
  const dateToTime = (date: Date) => new Date(date).getTime();
  chats?.sort((a: IDM, b: IDM) => dateToTime(a.createdAt) - dateToTime(b.createdAt));

  const dateSection = makeDateSection(chats);

  return (
    <ChatListContainer>
      <Scrollbars autoHide ref={scrollbarRef}>
        {Object.keys(dateSection).map((date) => (
          <DateSection>
            <p className='date'>{date}</p>
            {dateSection[date]?.map((chat) => (
              <ChatItem key={chat.id} chatData={chat} />
            ))}
          </DateSection>
        ))}
      </Scrollbars>
    </ChatListContainer>
  );
};
