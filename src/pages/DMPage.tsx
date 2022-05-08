import React, { useRef } from 'react';
import { ChatBox, ChatList, DMHeader } from 'components';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { IDM, IUser } from 'types';
import { fetcher } from 'utils';
import Scrollbars from 'react-custom-scrollbars';

export const DMPage = () => {
  const { workspace, id } = useParams();
  const postURL = `/api/workspaces/${workspace}/dms/${id}/chats`;
  const { data: member } = useSWR<IUser>(`/api/workspaces/${workspace}/users/${id}`, fetcher);
  const { data: chats, setSize } = useSWRInfinite<IDM[]>(
    (idx: number) => `${postURL}?perPage=20&page=${idx + 1}`,
    fetcher
  );
  const scrollRef = useRef<Scrollbars>(null);

  const isEmpty = chats?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (chats && chats[chats.length - 1]?.length < 20) || false;

  return (
    <>
      <DMHeader member={member} />
      <ChatList chats={chats} ref={scrollRef} setSize={setSize} isReachingEnd={isReachingEnd} />
      <ChatBox url={postURL} name={member?.nickname} scrollRef={scrollRef} />
    </>
  );
};
