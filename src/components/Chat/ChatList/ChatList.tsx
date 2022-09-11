import React, { RefObject, useEffect, forwardRef, useState } from 'react';
import { ChatType } from 'types';
import { ChatItem } from 'components';
import { ChatListContainer, DateSection } from './styles';
import { positionValues, Scrollbars } from 'react-custom-scrollbars';
import { makeDateSection } from 'utils';

interface ChatListProps {
  chats: ChatType[][];
  setSize: (f: (size: number) => number) => Promise<ChatType[][] | undefined>;
}

export const ChatList = forwardRef<Scrollbars, ChatListProps>(
  ({ chats, setSize }, scrollRef) => {
    const [loading, setLoading] = useState(false);
    const dateSection = makeDateSection(
      chats ? [...chats].flat().reverse() : []
    );

    const isEmpty = chats?.[0]?.length === 0;
    const isReachingEnd =
      isEmpty || (chats && chats[chats.length - 1]?.length < 20) || false;

    const handleScroll = (values: positionValues) => {
      if (values.scrollTop === 0 && !isReachingEnd) {
        setSize((prevSize) => prevSize + 1).then(() => {
          // 스크롤 위치 유지
          setLoading(true);
          const current = (scrollRef as RefObject<Scrollbars>)?.current;
          if (current) {
            current.scrollTop(current.getScrollHeight() - values.scrollHeight);
            console.log(current.getScrollHeight(), values.scrollHeight);
          }
        });
        setLoading(false);
      }
    };

    // 로딩 시 스크롤바 가장 아래로
    useEffect(() => {
      const current = (scrollRef as RefObject<Scrollbars>)?.current;
      if (chats?.length && !loading) {
        current?.scrollToBottom();
      }
    }, [chats, scrollRef, loading]);

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
