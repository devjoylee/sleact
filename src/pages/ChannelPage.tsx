import React from 'react';
import { ChannelHeader, ChatBox } from 'components';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { IChat } from 'types';
import { fetcher } from 'utils';

export const ChannelPage = () => {
  const { workspace, name } = useParams();
  const postURL = `/api/workspaces/${workspace}/channels/${name}/chats`;
  const { data: chats } = useSWR<IChat[]>(`${postURL}?perPage=20&page=1`, fetcher);

  console.log(chats);

  return (
    <>
      <ChannelHeader />
      <ChatBox url={postURL} name={name} />
    </>
  );
};
