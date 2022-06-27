import { useRef } from 'react';
import { ChannelHeader, ChatBox, ChatList } from 'components';
import { useParams } from 'react-router-dom';
import useSWRInfinite from 'swr/infinite';
import { IChat } from 'types';
import { fetcher } from 'utils';
import Scrollbars from 'react-custom-scrollbars';

export const ChannelPage = () => {
  const { workspace, name } = useParams();
  const scrollRef = useRef<Scrollbars>(null);
  const postURL = `/api/workspaces/${workspace}/channels/${name}/chats`;
  const {
    data: chats,
    setSize,
    mutate,
  } = useSWRInfinite<IChat[]>((idx: number) => `${postURL}?perPage=20&page=${idx + 1}`, fetcher);

  return (
    <>
      <ChannelHeader />
      <ChatList chats={chats as IChat[][]} ref={scrollRef} setSize={setSize} />
      <ChatBox url={postURL} name={name} scrollRef={scrollRef} mutate={mutate} />
    </>
  );
};
