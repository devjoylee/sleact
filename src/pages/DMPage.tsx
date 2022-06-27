import { useRef } from 'react';
import { ChatBox, ChatList, ChatHeader } from 'components';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { IDM, IUser } from 'types';
import { fetcher } from 'utils';
import Scrollbars from 'react-custom-scrollbars';

export const DMPage = () => {
  const { workspace, id } = useParams();
  const scrollRef = useRef<Scrollbars>(null);
  const postURL = `/api/workspaces/${workspace}/dms/${id}/chats`;
  const { data: member } = useSWR<IUser>(`/api/workspaces/${workspace}/users/${id}`, fetcher);
  const {
    data: chats,
    setSize,
    mutate,
  } = useSWRInfinite<IDM[]>((idx: number) => `${postURL}?perPage=20&page=${idx + 1}`, fetcher);

  return (
    <>
      <ChatHeader member={member} />
      <ChatList chats={chats as IDM[][]} ref={scrollRef} setSize={setSize} />
      <ChatBox url={postURL} name={member?.nickname} scrollRef={scrollRef} mutate={mutate} />
    </>
  );
};
