import React, { useRef } from 'react';
import { ChannelHeader, ChatBox } from 'components';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { IChat } from 'types';
import { fetcher } from 'utils';
import Scrollbars from 'react-custom-scrollbars';

export const ChannelPage = () => {
  const { workspace, name } = useParams();
  const postURL = `/api/workspaces/${workspace}/channels/${name}/chats`;
  const { data: chats, mutate } = useSWR<IChat[]>(`${postURL}?perPage=20&page=1`, fetcher);
  const scrollRef = useRef<Scrollbars>(null);

  return (
    <>
      <ChannelHeader />
      <ChatBox url={postURL} name={name} scrollRef={scrollRef} mutate={mutate} />
    </>
  );
};
