import { ChatType } from 'types';
import { ChatItemContainer, ChatProfile, ChatContent } from './styles';
import gravatar from 'gravatar';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

interface ChatListProps {
  chatData: ChatType;
}

export const ChatItem = ({ chatData }: ChatListProps) => {
  const params = useParams();
  const isChannel = Object.keys(params).includes('name');

  // @ts-ignore
  const { nickname, email } = isChannel ? chatData.User : chatData.Sender;
  const { createdAt, content } = chatData;

  return (
    <ChatItemContainer>
      <ChatProfile>
        <img src={gravatar.url(email, { s: '36px', d: 'retro' })} alt={nickname} />
      </ChatProfile>
      <ChatContent>
        <p className='user-data'>
          <b className='name'>{nickname}</b>
          <span className='createdAt'>{dayjs(createdAt).format('h:mm A')}</span>
        </p>
        <p className='text'>{content}</p>
      </ChatContent>
    </ChatItemContainer>
  );
};
