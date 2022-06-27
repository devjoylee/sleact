import React, { RefObject, useEffect, forwardRef } from 'react';
import { IDM } from 'types';
import { ChatItem } from 'components';
import { ChatListContainer, DateSection } from './styles';
import { positionValues, Scrollbars } from 'react-custom-scrollbars';
import { makeDateSection } from 'utils';

interface ChatListProps {
  chats: IDM[][] | undefined;
  setSize: (f: (size: number) => number) => Promise<IDM[][] | undefined>;
  isReachingEnd: boolean;
}

export const ChatList = forwardRef<Scrollbars, ChatListProps>(
  ({ chats, setSize, isReachingEnd }, scrollRef) => {
    const dateSection = makeDateSection(chats ? [...chats].flat().reverse() : []);

    const handleScroll = (values: positionValues) => {
      if (values.scrollTop === 0 && !isReachingEnd) {
        setSize((prevSize) => prevSize + 1).then(() => {
          // 스크롤 위치 유지
          const current = (scrollRef as RefObject<Scrollbars>)?.current;
          if (current) {
            current.scrollTop(current.getScrollHeight() - values.scrollHeight);
            console.log(current.getScrollHeight(), values.scrollHeight);
          }
        });
      }
    };

    // 로딩 시 스크롤바 가장 아래로
    useEffect(() => {
      const current = (scrollRef as RefObject<Scrollbars>)?.current;
      if (chats?.length) {
        current?.scrollToBottom();
      }
    }, [chats]);

    return (
      <ChatListContainer>
        <Scrollbars autoHide ref={scrollRef} onScrollFrame={handleScroll}>
          {Object.keys(dateSection).map((date) => (
            <DateSection key={date}>
              <p className='date'>{date}</p>
              {dateSection[date]?.map((chat) => (
                <ChatItem key={chat.id} chatData={chat} />
              ))}
            </DateSection>
          ))}
        </Scrollbars>
      </ChatListContainer>
    );
  }
);
