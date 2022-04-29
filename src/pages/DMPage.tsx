import React from 'react';
import { ChatBox, ChatList, DMHeader } from 'components';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { IDM, IUser } from 'types';
import { fetcher } from 'utils';

export const DMPage = () => {
  const { workspace, id } = useParams();
  const postURL = `/api/workspaces/${workspace}/dms/${id}/chats`;
  const { data: member } = useSWR<IUser>(`/api/workspaces/${workspace}/users/${id}`, fetcher);
  const { data: chats } = useSWR<IDM[]>(`${postURL}?perPage=20&page=1`, fetcher);

  console.log(chats);

  return (
    <>
      <DMHeader member={member} />
      <ChatList chats={chats} />
      <ChatBox url={postURL} name={member?.nickname} />
    </>
  );
};
