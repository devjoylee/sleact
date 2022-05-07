import React, { RefObject, useEffect } from 'react';
import { IDM } from 'types';
import { ChatItem } from 'components';
import { ChatListContainer, DateSection } from './styles';
import { Scrollbars } from 'react-custom-scrollbars';
import { makeDateSection } from 'utils';

interface ChatListProps {
  chats: IDM[] | undefined;
  scrollRef: RefObject<Scrollbars>;
}

export const ChatList = ({ chats, scrollRef }: ChatListProps) => {
  const dateSection = makeDateSection(chats ? [...chats].reverse() : []);

  // 로딩 시 스크롤바 가장 아래로
  useEffect(() => {
    if (chats?.length) {
      scrollRef.current?.scrollToBottom();
    }
  }, [chats, scrollRef]);

  return (
    <ChatListContainer>
      <Scrollbars autoHide ref={scrollRef}>
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
